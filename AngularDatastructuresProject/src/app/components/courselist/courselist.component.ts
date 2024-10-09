import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courseList: string[] = [
    'Bachelor of Science in Information Technology (BSIT)',
    'Bachelor of Science in Business Administration (BSBA)',
    'Bachelor of Science in Accountancy (BSA)',
    'Bachelor of Elementary Education (BEED)'
  ];
  courseName: string = '';

  addCourses() {
    this.courseList.push(this.courseName);
  }
}
