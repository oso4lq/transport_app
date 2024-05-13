import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-select-date',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  templateUrl: './select-date.component.html',
  styleUrl: './select-date.component.scss'
})

export class SelectDateComponent implements OnInit {

  @Output() departureDateChange = new EventEmitter<Date>();

  departureDate: Date | null = new Date(); // date default value

  ngOnInit() {
    console.log('Default date:', this.departureDate);
    if (this.departureDate !== null) {
      this.departureDateChange.emit(this.departureDate);
    }
  };

  onDateChange(event: any) {
    console.log('Date selected:', event.value);
    this.departureDateChange.emit(event.value);
  };

};
