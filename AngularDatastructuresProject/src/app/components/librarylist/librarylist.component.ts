import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraryList: string[] = [
    'Philippine General Hospital Medical Library',
    'University of the Philippines Diliman Main Library',
    'Quezon City Public Library',
    'Cebu City Public Library ',
    'Ateneo de Manila University Rizal Library'
  ];
  libraryName: string = '';

  addLibraries() {
    this.libraryList.push(this.libraryName);
  }
}
