import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = [
    'Introduction to Programming',
    'Data Structures in TypeScript',
    'Angular Directives',
    'Angular Pipes',
    'Basic CSS Properties'
  ];
  lectureName: string = '';

  addLectures() {
    this.lectureList.push(this.lectureName);
  }
}
