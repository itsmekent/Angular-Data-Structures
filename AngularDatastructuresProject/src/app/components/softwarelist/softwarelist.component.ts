import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[] = [
    'Microsoft Office',
    'Google Workspace',
    'LibreOffice',
    'Adobe Photoshop',
    'Adobe Illustrator'
  ];
  softwareName: string = '';

  addSoftwares() {
    this.softwareList.push(this.softwareName);
  }
}
