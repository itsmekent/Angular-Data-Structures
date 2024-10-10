import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicList: string[] = [
    '"Bituin Walang Ningning" by Sharon Cuneta',
    '"Tao" by The Itchyworms',
    '"Kahit Sandali" by Rivermaya',
    '"Pagtingin" by Ben&Ben',
    '"Araw-Araw" by Ben&Ben'
  ];
  musicName: string = '';

  addMusics() {
    this.musicList.push(this.musicName);
  }
}
