import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[] = [
    'Apple MacBook Air M1',
    'ASUS	ZenBook 14',
    'Acer	Swift 3',
    'Samsung Galaxy Book Pro',
    'Lenovo	ThinkPad X1 Carbon'
  ];
  laptopName: string = '';

  addLaptops() {
    this.laptopList.push(this.laptopName);
  }
}
