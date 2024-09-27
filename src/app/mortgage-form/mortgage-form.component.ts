import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsDisplayComponent } from '../results-display/results-display.component';
import { MortgageService } from '../mortgage.service';

@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ResultsDisplayComponent]
})
export class MortgageFormComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTerm: number = 30;
  propertyValue: number = 0;
  monthlyDebt: number = 0;
  monthlyIncome: number = 0;
  purchasePrice:number = 0;
  grossHousehold:number = 0;

  monthlyPayment: number = 0;
  ltv: number = 0;
  dti: number = 0;
  
  isLoanTermDropdownOpen: boolean = true;
  loanTermOptions = [
    { value: 30, label: '30 years' },
    { value: 35, label: '35 years' },
    { value: 40, label: '40 years' }
  ];

  constructor(private mortgageService: MortgageService) {}

  toggleLoanTermDropdown() {
    this.isLoanTermDropdownOpen = !this.isLoanTermDropdownOpen;
  }

  selectLoanTerm(term: number) {
    this.loanTerm = term;
    this.isLoanTermDropdownOpen = false;
  }
  
  calculateMortgage() {
    this.monthlyPayment = this.mortgageService.calculateMonthlyPayment(this.loanAmount, this.interestRate, this.loanTerm);
    this.ltv = this.mortgageService.calculateLTV(this.loanAmount, this.propertyValue);
    this.dti = this.mortgageService.calculateDTI(this.monthlyDebt, this.monthlyIncome);
  }
}