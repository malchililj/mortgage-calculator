import { TestBed } from '@angular/core/testing';
import { MortgageService } from './mortgage.service';

describe('MortgageService', () => {
  let service: MortgageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageService);
  });

  it('should calculate monthly payment correctly', () => {
    const payment = service.calculateMonthlyPayment(200000, 3.5, 30);
    expect(payment).toBeCloseTo(898.09, 2);
  });

  it('should calculate LTV correctly', () => {
    const ltv = service.calculateLTV(180000, 200000);
    expect(ltv).toBe(90);
  });

  it('should calculate DTI correctly', () => {
    const dti = service.calculateDTI(2000, 5000);
    expect(dti).toBe(40);
  });
});