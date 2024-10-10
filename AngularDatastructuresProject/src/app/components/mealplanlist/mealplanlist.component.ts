import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealPlanList: string[] = [
    'Breakfast: Oatmeal with fruits and nuts',
    'Lunch: Grilled chicken salad',
    'Dinner: Baked salmon with quinoa and steamed broccoli',
    'Snack: Apple slices with peanut butter'
  ];
  mealPlanName: string = '';

  addMealPlans() {
    this.mealPlanList.push(this.mealPlanName);
  }
}
