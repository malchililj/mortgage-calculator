import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  calculateMonthlyPayment(loanAmount: number, interestRate: number, loanTerm: number): number {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  calculateLTV(loanAmount: number, propertyValue: number): number {
    return (loanAmount / propertyValue) * 100;
  }

  calculateDTI(monthlyDebt: number, monthlyIncome: number): number {
    return (monthlyDebt / monthlyIncome) * 100;
  }
}