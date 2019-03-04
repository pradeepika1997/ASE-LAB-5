import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'register'
    },
    {
      title: 'Classify Text',
      url: '/main',
      icon: 'main'
    },
    {
      title: 'URL Preview',
      url: '/urlpreview',
      icon: 'urlpreview'
    },
    {
      title: 'User History',
      url: '/user_history',
      icon: 'user_history'
    },
    {
      title: 'Local Notifications',
      url: 'local-notifications'
    },
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
}
