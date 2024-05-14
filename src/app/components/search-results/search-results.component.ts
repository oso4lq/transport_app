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
  getDuration(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours === 0) {
      return `${remainingMinutes} minutes`;
    } else if (remainingMinutes === 0) {
      return `${hours} hours`;
    } else {
      return `${hours} hours ${remainingMinutes} minutes`;
    }
  };

};
