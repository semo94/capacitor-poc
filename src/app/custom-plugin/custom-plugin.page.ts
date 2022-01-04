import { Component } from '@angular/core';
import { ContactsPlugin } from 'poc-contacts-plugin/src';

@Component({
  selector: 'app-custom-plugin',
  templateUrl: 'custom-plugin.page.html',
  styleUrls: ['custom-plugin.page.scss']
})
export class CustomPluginPage {

  contacts = [];
  constructor() {}

  async loadContacts() {
    this.contacts = (await ContactsPlugin.getContacts('')).results;
    console.log('my contacts: ', this.contacts);
  }

}
