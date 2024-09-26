import { Component } from '@angular/core';
import { MortgageFormComponent } from './mortgage-form/mortgage-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MortgageFormComponent]
})
export class AppComponent {
  title = 'Mortgage Calculator';
}