import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';

/**
/**
 * Generated class for the ManageuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageuser',
  templateUrl: 'manageuser.html',
})
export class ManageuserPage {

  loading: any;
  alluser: any;
   anewaccess = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController, public loadingCtrl: LoadingController, private api: ServicesCmsapiProvider) {
  this.fetchalluser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageuserPage');
  }



  fetchalluser() {


    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.getalluser().then(data => {

        this.alluser = data;
        console.log(this.alluser)
        this.loading.dismiss();
      });

    });


  }

  refreshalluser() {
      this.api.getalluser().then(data => {

        this.alluser = data;

      });

  }

  disableuser(id, access) {

  if(access == 1) {
    this.anewaccess = 2
  }
  else {
    this.anewaccess = 1
  }
    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.disableuseraccess(id, this.anewaccess).then(data => {

        if(data['message']) {
          this. refreshalluser();
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


  deleteuser(id) {
      this.presentLoadingDefault();
      this.loading.present().then(() => {

        this.api.deleteuser(id).then(data => {

          if(data['message']) {
            this. refreshalluser();
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
