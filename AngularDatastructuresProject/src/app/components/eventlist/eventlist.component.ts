import { Component } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {
  eventList: string[] = [
    'National Arts Month',
    'Malasimbo Music and Arts Festival',
    'Sinulog Festival ',
    'Lanzones Festival ',
    'Filipino-American Friendship Day'
  ];
  eventName: string = '';

  addEvents() {
    this.eventList.push(this.eventName);
  }
}
