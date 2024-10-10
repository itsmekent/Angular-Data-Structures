import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = [
    'Fast & Furious Presents: Hobbs & Shaw',
    'Avengers: Endgame',
    'Rampage',
    'The Beekeeper ',
    'Kung Fu Panda 4',
  ];
  movieName: string = '';

  addMovies() {
    this.movieList.push(this.movieName);
  }
}
