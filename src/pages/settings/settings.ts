import { AdminloginPage } from './../adminlogin/adminlogin';
import { LoginPage } from './../login/login';
import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
   email = '';
   number = '';
   retrievedObject = localStorage.getItem('userdetails');

   dbuserdetails = JSON.parse(this.retrievedObject);
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public api: ServicesCmsapiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }



  updateemail() {
    this.api.resetuseremail( this.dbuserdetails.email, this.email).then(data => {
      console.log(data, this.dbuserdetails.email);
      if(data['message']) {

        this.successtoast('succescolor','Email reset successful, you have to login with your new credentials', 'top');
        this.navCtrl.setRoot(AdminloginPage);
      }

      else {
        this.successtoast('errorcolor', 'No such email', 'top');
      }

    });
  }
  updatenumber() {
    this.api.resetusernumber( this.dbuserdetails.number, this.number).then(data => {
      console.log(data, this.dbuserdetails.number);
      if(data['message']) {

        this.successtoast('succescolor','Number reset successful', 'top')
      }

      else {
        this.successtoast('errorcolor', 'No such number', 'top');
      }

      this.number = '';


    });
  }


  successtoast(colrtype, message, position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      cssClass: colrtype,
      position: position
    });

    toast.present();
  }



}
