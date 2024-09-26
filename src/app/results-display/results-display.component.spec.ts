import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsDisplayComponent } from './results-display.component';

describe('ResultsDisplayComponent', () => {
  let component: ResultsDisplayComponent;
  let fixture: ComponentFixture<ResultsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDisplayComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display results when monthlyPayment is greater than 0', () => {
    component.monthlyPayment = 1000;
    component.ltv = 80;
    component.dti = 35;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Results');
    expect(compiled.querySelector('p:nth-child(2)').textContent).toContain('Monthly Payment: $1,000.00');
    expect(compiled.querySelector('p:nth-child(3)').textContent).toContain('Loan-to-Value Ratio: 80.00%');
    expect(compiled.querySelector('p:nth-child(4)').textContent).toContain('Debt-to-Income Ratio: 35.00%');
  });

  it('should not display results when monthlyPayment is 0', () => {
    component.monthlyPayment = 0;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2')).toBeNull();
  });
});