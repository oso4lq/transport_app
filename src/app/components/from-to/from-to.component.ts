import { Component, ElementRef, EventEmitter, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TransportService } from '../../services/transport.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-from-to',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './from-to.component.html',
  styleUrl: './from-to.component.scss'
})

export class FromToComponent implements OnDestroy {

  @Output() fromChange = new EventEmitter<string>();
  @Output() toChange = new EventEmitter<string>();
  @ViewChild('suggestionBox') suggestionBox: ElementRef | undefined;

  from: string = '';
  to: string = '';
  fromSuggestions: any[] = [];
  toSuggestions: any[] = [];
  clickListener: (() => void) | undefined;

  constructor(
    private transportService: TransportService,
    private renderer: Renderer2,
  ) { }

  // give suggestions for FROM
  onFromInput(event: any) {
    this.fetchSuggestions(event.target.value, 'from');
    this.toSuggestions = [];
    this.fromChange.emit(event.target.value);
  };

  // give suggestions for TO
  onToInput(event: any) {
    this.fetchSuggestions(event.target.value, 'to');
    this.fromSuggestions = [];
    this.toChange.emit(event.target.value);
  };

  // send a request to get suggestions
  fetchSuggestions(part: string, type: 'from' | 'to') {
    if (part.length >= 2) { // minimum input length to trigger suggestion
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

  // set selected data
  selectSuggestion(suggestion: any, type: 'from' | 'to') {
    const destinationCode = suggestion[0]; // destination code
    const destinationString = suggestion[2]; // destination string
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

  // ngOnInit & ngOnDestroy to handle click event listener
  ngOnInit() {
    this.clickListener = this.renderer.listen('body', 'click', (event: any) => {
      if (!this.suggestionBox?.nativeElement.contains(event.target)) {
        this.fromSuggestions = [];
        this.toSuggestions = [];
      }
    });
  };
  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
  };

};
