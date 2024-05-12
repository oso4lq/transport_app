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

  constructor() { }

  ngOnChanges() {
    this.dataSource.data = this.searchResults;
  }
}
