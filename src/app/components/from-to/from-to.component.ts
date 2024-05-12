import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-from-to',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './from-to.component.html',
  styleUrl: './from-to.component.scss'
})

export class FromToComponent {
  from: string = '';
  to: string = '';
}
