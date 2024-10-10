import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = [
    'Mona Lisa by Leonardo da Vinci',
    'he Scream - Edvard Munch',
    'Las Meninas - Diego Velázquez',
    'Water Lilies - Claude Monet',
    'The Birth of Venus - Sandro Botticelli'
  ];
  paintingName: string = '';

  addPaintings() {
    this.paintingList.push(this.paintingName);
  }
}
