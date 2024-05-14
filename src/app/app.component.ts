import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromToComponent } from './components/from-to/from-to.component';
import { ResultsComponent } from './components/search-results/search-results.component';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { TransportTypeComponent } from './components/transport-type/transport-type.component';
import { MatButtonModule } from '@angular/material/button';
import { TransportService } from './services/transport.service';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from './components/search-header/search-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FromToComponent,
    TransportTypeComponent,
    SelectDateComponent,
    SearchHeaderComponent,
    ResultsComponent,
    MatButtonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'transport_app';
  from: string = '';
  to: string = '';
  transportType: string = 'any';
  departureDate: Date | null = null;
  searchResults: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string = '';

  private errorTimeout: any;

  constructor(private transportService: TransportService) { }

  searchTransport() {
    if (this.from && this.to) {
      this.loading = true; // loading state
      this.error = false; // error state

      const isoDate = this.departureDate ? this.departureDate.toISOString() : '';

      this.transportService.searchTransport(this.from, this.to, this.transportType, isoDate).subscribe(
        {
          next: (response: any) => {
            this.searchResults = response.segments;
            this.loading = false; 
          },
          error: (err: any) => {
            console.error(err);
            this.loading = false;
            this.error = true;
            this.errorMessage = 'Something went wrong, please reload the page and try again.';
          },
        }
      );
    } else {
      this.errorMessage = "Please fill in both 'From' and 'To' locations before searching.";
    }
    this.errorTimeout = setTimeout(() => {
      this.error = false;
      this.errorMessage = '';
    }, 5000);
  };

  ngOnDestroy() {
    clearTimeout(this.errorTimeout);
  };

};
