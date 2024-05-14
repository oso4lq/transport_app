import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FromToComponent } from './components/from-to/from-to.component';
import { ResultsComponent } from './components/search-results/search-results.component';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { TransportTypeComponent } from './components/transport-type/transport-type.component';
import { MatButtonModule } from '@angular/material/button';
import { TransportService } from './services/transport.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // HttpClientModule,
    FromToComponent,
    TransportTypeComponent,
    SelectDateComponent,
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
  // departureDate: string = '';
  departureDate: Date | null = null; // Change the type to Date or null
  searchResults: any[] = []; // Declare the property here

  constructor(private transportService: TransportService) { }

  searchTransport() {
    if (this.from && this.to) {
      console.log(this.from);
      console.log(this.to);
      console.log(this.transportType);
      console.log(this.departureDate);
      const isoDate = this.departureDate ? this.departureDate.toISOString() : '';
      console.log(isoDate);
      this.transportService.searchTransport(this.from, this.to, this.transportType, isoDate)
        .subscribe(response => {
          // Handle the response from the API here
          console.log(response);
          this.searchResults = response.segments;
        });
    } else {
      console.log("Please fill in both 'From' and 'To' locations before searching.");
    }
  };

};
