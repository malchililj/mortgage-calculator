import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultsDisplayComponent {
  @Input() monthlyPayment: number = 0;
  @Input() ltv: number = 0;
  @Input() dti: number = 0;
}