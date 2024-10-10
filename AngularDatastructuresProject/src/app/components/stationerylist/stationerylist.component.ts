import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryList: string[] = [
    'Highlighter',
    '	A4 Printer',
    'Scissors',
    'Tape Dispenser',
    'Stapler'
  ];
  stationeryName: string = '';

  addStationeries() {
    this.stationeryList.push(this.stationeryName);
  }
}
