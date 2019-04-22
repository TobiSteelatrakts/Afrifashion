import { SuperprofilePage } from './../superprofile/superprofile';
import { ManagebannerPage } from './../managebanner/managebanner';
import { ManageadminPage } from './../manageadmin/manageadmin';
import { ManageuserPage } from './../manageuser/manageuser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the SuperadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-superadmin',
  templateUrl: 'superadmin.html',
})
export class SuperadminPage {
  superprofile: any;
  manageuser: any;
  manageadmin: any;
  managebanner: any;

  constructor(public navCtrl: NavController,private toastCtrl: ToastController, public loadingCtrl: LoadingController,private alertCtrl: AlertController, public platform: Platform, private menuCtrl: MenuController, public navParams: NavParams, ) {

    this.menuCtrl.enable(false, 'myMenu');


    this.superprofile = SuperprofilePage;
    this.manageuser = ManageuserPage;
    this.manageadmin = ManageadminPage;
    this.managebanner = ManagebannerPage;
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad SuperadminPage');
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
