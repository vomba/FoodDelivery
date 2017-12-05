import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firestore from "firebase";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";



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
})




export class DealsPage {

  private DealsCollection : AngularFirestoreCollection<Deals>;
  deals : Observable<Deals[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly afs: AngularFirestore) {
        this.DealsCollection = afs.collection<Deals>('deals');
        this.deals = this.DealsCollection.valueChanges();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
  }

}
