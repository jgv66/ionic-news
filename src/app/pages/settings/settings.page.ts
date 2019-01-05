import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor( private storage: Storage,
               private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  onClearFavorites() {
    this.storage.remove( 'favorites' );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Favoritos fue limpiado',
      duration: 2000,
      position: 'middle',
      translucent: true,
      color: 'warning'
    });
    toast.present();
  }

}
