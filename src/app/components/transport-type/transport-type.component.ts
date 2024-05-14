import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-transport-type',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './transport-type.component.html',
  styleUrl: './transport-type.component.scss'
})

export class TransportTypeComponent {
  @Output() transportTypeChange = new EventEmitter<string>();

  transportType: string = '';

  // set selected data
  changeTransportType(newType: string) {
    // Emit the selected transport type
    this.transportTypeChange.emit(newType);
    // Update the currently selected transport type
    this.transportType = newType;
  }

};
