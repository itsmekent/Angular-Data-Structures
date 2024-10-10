import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  phoneContactList: string[] = [
    'kent +1 234-567-8908',
    'Fiercie +1 234-567-8908',
    'Walter +1 234-567-8908',
    'Rodney man +1 234-567-8908',
    'Roerenz Joy +1 234-567-8908'

  ];
  phoneContactName: string = '';

  addPhoneContacts() {
    this.phoneContactList.push(this.phoneContactName);
  }
}
