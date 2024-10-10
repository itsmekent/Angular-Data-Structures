import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  laptopSpecificationList: string[] = [
    'RAM: 16GB',
    'Storage: 1TB SSD',
    'Display Resolution: 1920 x 1080',
    'Graphics: Intel Iris Xe',
    'Display Size: 14 inches'
  ];
  laptopSpecificationName: string = '';

  addLaptopSpecifications() {
    this.laptopSpecificationList.push(this.laptopSpecificationName);
  }
}
