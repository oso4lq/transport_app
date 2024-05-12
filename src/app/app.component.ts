import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromToComponent } from './components/from-to/from-to.component';
import { ResultsComponent } from './components/search-results/search-results.component';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { TransportTypeComponent } from './components/transport-type/transport-type.component';
import { MatButtonModule } from '@angular/material/button';
import { TransportService } from './services/transport.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
  departureDate: string = '';

  constructor(private transportService: TransportService) {}

  // searchTransport() {
  //   this.transportService.searchTransport(this.from, this.to, this.transportType, this.departureDate)
  //     .subscribe(response => {
  //       // Handle the response from the API here
  //       console.log(response);
  //     });
  // };
  
};
