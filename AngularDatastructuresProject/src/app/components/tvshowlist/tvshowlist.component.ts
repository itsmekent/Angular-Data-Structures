import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  tvShowList: string[] = [
    'Eat Bulaga!',
    'Kapuso Mo, Jessica Soho',
    'Karelasyon',
    '24 oras',
    'Wowowin'
  ];
  tvShowName: string = '';

  addTvShows() {
    this.tvShowList.push(this.tvShowName);
  }
}
