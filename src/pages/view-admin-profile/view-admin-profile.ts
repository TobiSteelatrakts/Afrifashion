import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-admin-profile',
  templateUrl: 'view-admin-profile.html',
})
export class ViewAdminProfilePage {

   loading: any;
   userdetails: any;
  retrievedObject = localStorage.getItem('admindetails');

  dbuserdetails = JSON.parse(this.retrievedObject);
    // user_id = localStorage.getItem('user_id');
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private api: ServicesCmsapiProvider) {

    // this.fetchuserdetials();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
  }

  ionViewWillLoad() {
    this.fetchuserdetials();
  }



  fetchuserdetials() {


    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.getadmin(this.dbuserdetails.id).then(data => {

        this.userdetails = data;
        console.log(this.userdetails['name'])
        this.loading.dismiss();
      });

    });


  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Processing...'
    });
  }
}
