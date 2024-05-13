import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-transport-type',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './transport-type.component.html',
  styleUrl: './transport-type.component.scss'
})

export class TransportTypeComponent {
  @Output() transportTypeChange = new EventEmitter<string>();

  changeTransportType(newType: string) {
    this.transportTypeChange.emit(newType);
  }
}
