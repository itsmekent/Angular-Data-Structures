import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  gameList: string[] = [
    'Mobile Legends: Bang Bang',
    'Summer time saga',
    'Honor of kings',
    'Valorant',
    'Call of Duty'
  ];
  gameName: string = '';

  addGames() {
    this.gameList.push(this.gameName);
  }
}
