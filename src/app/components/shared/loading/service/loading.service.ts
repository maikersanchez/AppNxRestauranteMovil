import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  constructor(public loadingController: LoadingController) { }

  //SpinnerTypes: "bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small";

  async presentLoading(cssCustom, mensaje, duracion) {
    const loading = await this.loadingController.create({
      cssClass: cssCustom,
      message: mensaje,
      duration: duracion
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentLoadingWithOptions(mensaje, duracion, backdropDismiss, SpinnerTypes, cssCustom) {
    const loading = await this.loadingController.create({
      spinner: SpinnerTypes,
      duration: duracion,
      message: mensaje,
      translucent: true,
      cssClass: cssCustom ||'custom-class custom-loading',
      backdropDismiss:  backdropDismiss||true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
}
