import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import firebase from "firebase";
import {firebaseConfig} from "./app.module";
@Component({
  templateUrl: 'app.html'
})




export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //firebase integration

      firebase.initializeApp({
        apiKey: "AIzaSyDx1B9z_GNk_GeNICEt2AHAoXQZdsyBPP0",
        authDomain: "food-delivery-f9616.firebaseapp.com",
        databaseURL: "https://food-delivery-f9616.firebaseio.com",
        projectId: "food-delivery-f9616",
        storageBucket: "food-delivery-f9616.appspot.com",
        messagingSenderId: "605907856931"
      });

      const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        if (!user) {
          this.rootPage = 'LoginPage';
          unsubscribe();
        } else {
          this.rootPage = HomePage;
          unsubscribe();
        }
      });

    });
  }
}

