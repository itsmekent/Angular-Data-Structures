import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = [
    'Educational Videos',
    'Entertainment Videos',
    'Video Blogs',
    'Gaming Videos',
    'Short Films'
  ];
  videoName: string = '';

  addVideos() {
    this.videoList.push(this.videoName);
  }
}
