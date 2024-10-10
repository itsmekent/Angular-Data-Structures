import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = [
    'Ford Mustang',
    'Chevrolet Corvette',
    'Porsche 911',
    'Toyota GR Supra',
    'Mercedes-Benz S-Class'
  ];
  carModelName: string = '';

  addCarModels() {
    this.carModelList.push(this.carModelName);
  }
}
