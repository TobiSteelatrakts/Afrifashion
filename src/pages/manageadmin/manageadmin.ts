import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';

/**
 * Generated class for the ManageadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageadmin',
  templateUrl: 'manageadmin.html',
})
export class ManageadminPage {

  loading: any;
  alladmin: any;
  anewaccess = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController, public loadingCtrl: LoadingController, private api: ServicesCmsapiProvider) {
  this.fetchalladmin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageadminPage');
  }



  fetchalladmin() {


    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.getalladmin().then(data => {

        this.alladmin = data;
        console.log(this.alladmin)
        this.loading.dismiss();
      });

    });


  }

  refreshalladmin() {
      this.api.getalladmin().then(data => {

        this.alladmin = data;

      });

  }

  disableadmin(id, access) {

  if(access == 1) {
    this.anewaccess = 2

  }
  else {

    this.anewaccess = 1
  }
    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.disableadminaccess(id, this.anewaccess).then(data => {

        if(data['message']) {
          this. refreshalladmin();
          // this.addtocart('succescolor', data['message']);
          if(this.anewaccess == 2) {
            this.addtocart('succescolor', 'User Enabled Suceessfully');
          }
          else {
            this.addtocart('succescolor', 'User Disabled Suceessfully');
          }
        } else {
          this.addtocart('errorcolor', 'oops something went wrong try again');
        }

        this.loading.dismiss();
      });

    });


  }


  deleteadmin(id) {
      this.presentLoadingDefault();
      this.loading.present().then(() => {

        this.api.deleteadmin(id).then(data => {

          if(data['message']) {
            this. refreshalladmin();
            this.addtocart('succescolor', data['message']);
          } else {
            this.addtocart('errorcolor', 'oops something went wrong try again');
          }

          this.loading.dismiss();
        });

      });


    }

  // disableadmin(id, access) {
  //   alert(id+' '+access);
  // }


  addtocart(color, value){
    this.successtoast(color,value, 'top');
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Processing...'
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
