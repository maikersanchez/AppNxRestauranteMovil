import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Principal',
      url: '/principal',
      icon: 'home'
    },
    {
      title: 'camareros',
      url: '/camareros',
      icon: 'list'
    },
    {
      title: 'Registro Camarero',
      url: '/registro-camarero',
      icon: 'document'
    },
    {
      title: 'Reporte Cliente',
      url: '/reporte-cliente',
      icon: 'document'
    },
    {
      title: 'Reporte Camarero',
      url: '/reporte-camarero',
      icon: 'document'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
