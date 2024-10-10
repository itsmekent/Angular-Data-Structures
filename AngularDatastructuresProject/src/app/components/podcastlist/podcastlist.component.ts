import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = [
    'The Podcast with K Brosas',
    'The Filipino Pod',
    'Buhay Negosyo',
    'True Crime Pilipinas',
    'Science, History, and Philosophy with Dr. J'
  ];
  podcastName: string = '';

  addPodcasts() {
    this.podcastList.push(this.podcastName);
  }
}
