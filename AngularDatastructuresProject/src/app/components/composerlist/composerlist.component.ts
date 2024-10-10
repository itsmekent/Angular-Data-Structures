import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composerList: string[] = [
    'Johann Sebastian Bach',
    'Ludwig van Beethoven',
    'Wolfgang Amadeus Mozart',
    'Pyotr Ilyich Tchaikovsky',
  ];
  composerName: string = '';

  addComposers() {
    this.composerList.push(this.composerName);
  }
}
