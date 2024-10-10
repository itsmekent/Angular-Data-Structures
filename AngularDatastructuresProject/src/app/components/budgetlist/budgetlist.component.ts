import { Component } from '@angular/core';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgetList: string[] = [
    'Loan Payments',
    'Utilities',
    'Rent',
    'Groceries',
    'Insurance'
  ];
  budgetName: string = '';

  addBudgets() {
    this.budgetList.push(this.budgetName);
  }
}
