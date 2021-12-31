import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-built-in-plugin',
  templateUrl: 'built-in-plugin.page.html',
  styleUrls: ['built-in-plugin.page.scss']
})
export class BuiltInPluginPage {

  private alertMessage: string;

  constructor(
    public alertController: AlertController
  ) {}

  async getlocationMessage(): Promise<string> {
    return Geolocation.getCurrentPosition()
    .then(result => `Your longitude is ${result.coords.longitude} and your latitude is ${result.coords.latitude}`)
    .catch(error => error?.message);
  };

  async showCurrentPosition() {
    this.alertMessage = await this.getlocationMessage();
    let alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Location',
      subHeader: 'Current Location is:',
      message: this.alertMessage,
      buttons: ['OK']
    });
    await alert.present();
    alert.onDidDismiss().then(() => alert = null);
  }

}
