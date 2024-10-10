import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: string[] = [
    'Central Processing Unit (CPU)',
    'Motherboard',
    'Random Access Memory (RAM) ',
    'Hard Disk Drive',
    'Graphics Processing Unit (GPU)'
  ];
  computerHardwareName: string = '';

  addComputerHardwares() {
    this.computerHardwareList.push(this.computerHardwareName);
  }
}
