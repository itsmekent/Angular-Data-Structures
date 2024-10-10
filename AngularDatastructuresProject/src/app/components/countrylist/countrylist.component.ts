import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countryList: string[] = [
    'Philippines',
    'South Korea',    
    'Japan',  
    'Singapore',
    'Canada'
  ];
  countryName: string = '';

  addCountries() {
    this.countryList.push(this.countryName);
  }
}
