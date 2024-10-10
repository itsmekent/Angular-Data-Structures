import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = [
    'Skyline Tower',
    'SM Mall of Asia',
    'Ayala Center',
    'The Mind Museums',
    'The Grand Hyatt Manila'
  ]
  buildingName: string = '';

  addBuildings() {
    this.buildingList.push(this.buildingName);
  }
}
