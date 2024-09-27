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

  calculateLTV(loanAmount: number, purchasePrice: number): number {
    return (loanAmount / purchasePrice) * 100;
  }

  calculateDTI(monthlyPayment: number, grossHousehold: number): number {
    console.log(monthlyPayment, grossHousehold, "-------")
    return (monthlyPayment / (grossHousehold / 12)) * 100;
  }
}