import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DealsPage} from "../deals/deals";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gogo(){
    this.navCtrl.push(DealsPage)
  }
}
