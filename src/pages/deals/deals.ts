import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";


export interface Deal { Name: String;}


/**
 * Generated class for the DealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
  template: `
    <ul>
      <li *ngFor="let Deal of Deals | async">
        {{ Deal.Name }}
      </li>
    </ul>
  `
})




export class DealsPage {

  DealsCollection: AngularFirestoreCollection<Deal>;
  Deals: Observable<Deal[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly afs: AngularFirestore) {

    this.DealsCollection = afs.collection<Deal>('Deals');
    this.Deals = this.DealsCollection.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
  }

}
