import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessoryList: string[] = [
    'Watch',
    'Sunglasses',
    'Necklace',
    'Bracelet',
    'Rings'
  ];
  accessoryName: string = '';

  addAccessories() {
    this.accessoryList.push(this.accessoryName);
  }
}
