import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourList: string[] = [
    'City Overview',
    'Historical Landmarks',
    'Natural Attractions',
    'Cultural Experiences',
    'Culinary Tour'
  ];
  tourName: string = '';

  addTours() {
    this.tourList.push(this.tourName);
  }
}
