import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentationList: string[] = [
    'Introduction to TypeScript',
    'Data Structures in TypeScript',
    'Object-Oriented Programming (OOP) in TypeScript',
    'Angular Directives',
    'Basic Routing in Angular'
  ];
  presentationName: string = '';

  addPresentations() {
    this.presentationList.push(this.presentationName);
  }
}
