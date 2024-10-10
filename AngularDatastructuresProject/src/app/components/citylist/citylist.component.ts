import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = [
    'Baguio City',
    'Quezon City',
    'Makati City ',
    'Malabon City ',
    'Manila'
  ];
  cityName: string = '';

  addCities() {
    this.cityList.push(this.cityName);
  }
}
