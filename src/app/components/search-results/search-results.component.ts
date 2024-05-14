import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIcon,
  ],
  providers: [
    DatePipe,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})

export class ResultsComponent {

  @Input() searchResults: any[] = [];

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['transport_type', 'title', 'from', 'to', 'departure', 'duration', 'arrival'];

  constructor() { }

  ngOnChanges() {
    this.dataSource.data = this.searchResults;
  };

  // format travel time
  // hello Russian declensions
  getDuration(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    // часы
    let hoursString: string;
    if (hours === 0 || (hours >= 5 && hours <= 20) || (hours % 10 >= 5 && hours % 10 <= 9) || (hours % 10 === 0)) {
      hoursString = 'часов';
    } else if (hours === 1 || (hours % 10 === 1 && hours !== 11)) {
      hoursString = 'час';
    } else {
      hoursString = 'часа';
    }
    // минуты
    let minutesString: string;
    if (remainingMinutes === 0 || (remainingMinutes >= 5 && remainingMinutes <= 20) || (remainingMinutes % 10 >= 5 && remainingMinutes % 10 <= 9) || (remainingMinutes % 10 === 0)) {
      minutesString = 'минут';
    } else if (remainingMinutes === 1 || (remainingMinutes % 10 === 1 && remainingMinutes !== 11)) {
      minutesString = 'минута';
    } else {
      minutesString = 'минуты';
    }
    // concatenation
    if (hours === 0) {
      return `${remainingMinutes} ${minutesString}`;
    } else if (remainingMinutes === 0) {
      return `${hours} ${hoursString}`;
    } else {
      return `${hours} ${hoursString} ${remainingMinutes} ${minutesString}`;
    }
  };

};
