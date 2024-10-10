import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  mobileAppList: string[] = [
    'Facebook',
    'Messenger',
    'Instagram',
    'TikTok',
    'GCash',
    'YouTube'
  ];
  mobileAppName: string = '';

  addMobileApps() {
    this.mobileAppList.push(this.mobileAppName);
  }
}
