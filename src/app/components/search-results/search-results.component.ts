import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})

export class ResultsComponent {
  @Input() searchResults: any[] = [];
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['arrivalTime', 'departureTime']; // Add more column names as needed

  constructor() { }

  ngOnChanges() {
    this.dataSource.data = this.searchResults;
  }
}
