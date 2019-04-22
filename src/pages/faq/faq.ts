import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  boolfaq1 = false;
  boolfaq2 = false;
  boolfaq3 = false;
  boolfaq4 = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  clickfaq1() {
    this.boolfaq1 = ! this.boolfaq1;
    this.boolfaq2 = false;
    this.boolfaq3 = false;
    this.boolfaq4 = false;
  }

  clickfaq2() {
    this.boolfaq1 = false;
    this.boolfaq2 = ! this.boolfaq2;
    this.boolfaq3 = false;
    this.boolfaq4 = false;
  }

  clickfaq3() {
    this.boolfaq1 = false;
    this.boolfaq2 = false;
    this.boolfaq3 = ! this.boolfaq3;
    this.boolfaq4 = false;
  }

  clickfaq4() {
    this.boolfaq1 = false;
    this.boolfaq2 = false;
    this.boolfaq3 = false;
    this.boolfaq4 = ! this.boolfaq4;
  }

}
