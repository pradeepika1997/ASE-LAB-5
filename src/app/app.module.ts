import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthServiceService} from './auth-service.service';

import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import {ErrorHandler} from 'protractor/built/exitCodes';

const firebaseConfig = {
  apiKey: 'AIzaSyBwGKIUoTlhTR6zaNbK9hpw9lSGkGCGv_U',
  authDomain: 'ase-lab5.firebaseapp.com',
  databaseURL: 'https://ase-lab5.firebaseio.com',
  projectId: 'ase-lab5',
  storageBucket: 'ase-lab5.appspot.com',
  messagingSenderId: '757651013565'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
      HttpClientModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
      AuthServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


