import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Pineaplle',
    'Grapes'
  ];
  fruitName: string = '';

  addFruits() {
    this.fruitList.push(this.fruitName);
  }
}
