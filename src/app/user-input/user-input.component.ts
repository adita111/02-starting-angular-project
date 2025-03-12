import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: false,

  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
 
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');
constructor(private investmentService: InvestmentService ){}

  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
   
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
    this.enteredInitialInvestment.set('0');
  }
}
