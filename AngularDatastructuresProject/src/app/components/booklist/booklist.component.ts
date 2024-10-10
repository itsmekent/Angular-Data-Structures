import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = [
    '"The Power of Now" by Eckhart Tolle',
    '"Man’s Search for Meaning" by Viktor E. Frankl',
    '"The Alchemist" by Paulo Coelho',
    '"The Four Agreements" by Don Miguel Ruiz',
    '"Atomic Habits" by James Clear'
  ];
  bookName: string = '';

  addBooks() {
    this.bookList.push(this.bookName);
  }
}
