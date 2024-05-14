import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
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
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'eng-US' }
  ],
  templateUrl: './select-date.component.html',
  styleUrl: './select-date.component.scss'
})

export class SelectDateComponent implements OnInit {

  @Output() departureDateChange = new EventEmitter<Date>();

  departureDate: Date | null = new Date(); // date default value

  // set locale
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('eng');
  }

  // set default data as today
  ngOnInit() {
    if (this.departureDate !== null) {
      this.departureDateChange.emit(this.departureDate);
    }
  };

  // set selected data
  onDateChange(event: any) {
    this.departureDateChange.emit(event.value);
  };

};
