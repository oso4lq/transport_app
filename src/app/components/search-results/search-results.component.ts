import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  providers: [
    DecimalPipe,
    DatePipe,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})

export class ResultsComponent {

  @Input() searchResults: any[] = [];

  dataSource = new MatTableDataSource<any>();
  // displayedColumns: string[] = ['title'];
  displayedColumns: string[] = ['transport_type', 'title', 'from', 'to', 'departure', 'duration', 'arrival'];

  constructor() { }

  ngOnChanges() {
    this.dataSource.data = this.searchResults;
  }
}
