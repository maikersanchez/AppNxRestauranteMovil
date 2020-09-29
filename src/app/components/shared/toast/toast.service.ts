import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(mensaje, duration) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duration || 2000
    });
    toast.present();
  }

  async presentToastWithOptions(header, mensaje, side, icon, textBtn,  textBtn2, btn2Role) {
    const toast = await this.toastController.create({
      header: header,
      message: mensaje,
      position: 'top',
      buttons: [
        {
          side: side || 'start',
          icon: icon ||'star',
          text: textBtn ||'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: textBtn2 ||'Done',
          role: btn2Role || 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
