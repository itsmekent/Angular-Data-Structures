import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomList: string[] = [
    '201	Library',
    '202	Gym',
    '103	Computer Lab',
    '104	Art Room',
    '105	Music Room'
  ];
  classroomName: string = '';

  addClassrooms() {
    this.classroomList.push(this.classroomName);
  }
}
