import { NewhomePage } from './../newhome/newhome';
import { ViewadminBookingsPage } from './../viewadmin-bookings/viewadmin-bookings';
import { ViewAdminProfilePage } from './../view-admin-profile/view-admin-profile';

import { ViewProductTabPage } from './../view-product-tab/view-product-tab';
import { AddProductTabPage } from './../add-product-tab/add-product-tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  addproducttab: any;
  viewproducttab: any;
  viewadminprofiletab: any;
  viewadminbookings: any;
  retrievedObject = localStorage.getItem('admindetails');

  dbuserdetails = JSON.parse(this.retrievedObject);
  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,private alertCtrl: AlertController, public platform: Platform, public navParams: NavParams) {
    this.menuCtrl.enable(false, 'myMenu');

    this.addproducttab = AddProductTabPage;
    this.viewproducttab = ViewProductTabPage;
    this.viewadminprofiletab = ViewAdminProfilePage;
    this.viewadminbookings = ViewadminBookingsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  gotohome(){
    this.navCtrl.push(NewhomePage);
  }


  closeap() {
    this.exit();
    }

    exit(){
      let alert = this.alertCtrl.create({
        title: 'Confirm',
        message: 'Do you want to exit?',
        buttons: [{
          text: "exit?",
          handler: () => { this.exitApp() }
        }, {
          text: "Cancel",
          role: 'cancel'
        }]
      })
      alert.present();
    }
    exitApp(){
    this.platform.exitApp();
    }

}
