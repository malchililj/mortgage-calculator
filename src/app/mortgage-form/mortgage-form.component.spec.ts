import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MortgageFormComponent } from './mortgage-form.component';
import { ResultsDisplayComponent } from '../results-display/results-display.component';
import { MortgageService } from '../mortgage.service';

describe('MortgageFormComponent', () => {
  let component: MortgageFormComponent;
  let fixture: ComponentFixture<MortgageFormComponent>;
  let mortgageService: MortgageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageFormComponent, ResultsDisplayComponent ],
      imports: [ FormsModule ],
      providers: [ MortgageService ]
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageFormComponent);
    component = fixture.componentInstance;
    mortgageService = TestBed.inject(MortgageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate mortgage when form is submitted', () => {
    spyOn(mortgageService, 'calculateMonthlyPayment').and.returnValue(1000);
    spyOn(mortgageService, 'calculateLTV').and.returnValue(80);
    spyOn(mortgageService, 'calculateDTI').and.returnValue(35);

    component.loanAmount = 200000;
    component.interestRate = 3.5;
    component.loanTerm = 30;
    component.propertyValue = 250000;
    component.monthlyDebt = 1500;
    component.monthlyIncome = 5000;

    component.calculateMortgage();

    expect(component.monthlyPayment).toBe(1000);
    expect(component.ltv).toBe(80);
    expect(component.dti).toBe(35);
  });
});