import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import {SignupPage} from "../pages/signup/signup";
import {ResetPasswordPage} from "../pages/reset-password/reset-password";

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {DealsPage} from "../pages/deals/deals";
import {InfoPage} from "../pages/info/info";

export const firebaseConfig= {
  apiKey: "AIzaSyDx1B9z_GNk_GeNICEt2AHAoXQZdsyBPP0",
  authDomain: "food-delivery-f9616.firebaseapp.com",
  databaseURL: "https://food-delivery-f9616.firebaseio.com",
  projectId: "food-delivery-f9616",
  storageBucket: "food-delivery-f9616.appspot.com",
  messagingSenderId: "605907856931"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ResetPasswordPage,
    DealsPage,
    InfoPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDx1B9z_GNk_GeNICEt2AHAoXQZdsyBPP0",
      authDomain: "food-delivery-f9616.firebaseapp.com",
      databaseURL: "https://food-delivery-f9616.firebaseio.com",
      projectId: "food-delivery-f9616",
      storageBucket: "food-delivery-f9616.appspot.com",
      messagingSenderId: "605907856931"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ResetPasswordPage,
    DealsPage,
    InfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
