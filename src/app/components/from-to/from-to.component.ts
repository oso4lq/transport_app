import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TransportService } from '../../services/transport.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-from-to',
  standalone: true,
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './from-to.component.html',
  styleUrl: './from-to.component.scss'
})

export class FromToComponent {

  @Output() fromChange = new EventEmitter<string>();
  @Output() toChange = new EventEmitter<string>();

  from: string = '';
  to: string = '';
  fromSuggestions: any[] = [];
  toSuggestions: any[] = [];

  constructor(private transportService: TransportService) { }

  onFromInput(event: any) {
    this.fetchSuggestions(event.target.value, 'from');
    this.fromChange.emit(event.target.value);
  };

  onToInput(event: any) {
    this.fetchSuggestions(event.target.value, 'to');
    this.toChange.emit(event.target.value);
  };

  fetchSuggestions(part: string, type: 'from' | 'to') {
    if (part.length >= 2) { // Minimum characters to trigger suggestion
      this.transportService.getDestinationSuggestions(part)
        .subscribe(response => {
          if (type === 'from') {
            this.fromSuggestions = response[1] || [];
          } else {
            this.toSuggestions = response[1] || [];
          }
        });
    } else {
      if (type === 'from') {
        this.fromSuggestions = [];
      } else {
        this.toSuggestions = [];
      }
    }
  };

  selectSuggestion(suggestion: any, type: 'from' | 'to') {
    const destinationCode = suggestion[0]; // Extracting the destination code
    const destinationString = suggestion[2]; // Extracting the destination string
    if (type === 'from') {
      this.from = destinationString;
      this.fromChange.emit(destinationCode);
      this.fromSuggestions = [];
    } else {
      this.to = destinationString;
      this.toChange.emit(destinationCode);
      this.toSuggestions = [];
    }
  };

};
