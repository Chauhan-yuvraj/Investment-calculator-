import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = '10000';
  enteredAnnualInvestment = '1000';
  enteredExpectedReturn = '12';
  enteredDuration = '10';

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
