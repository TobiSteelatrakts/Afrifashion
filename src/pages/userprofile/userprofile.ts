import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';

/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {

   loading: any;
   userdetails: any;
  retrievedObject = localStorage.getItem('userdetails');

  dbuserdetails = JSON.parse(this.retrievedObject);
    // user_id = localStorage.getItem('user_id');
  constructor(public navCtrl: NavController, private menuCtrl: MenuController, public loadingCtrl: LoadingController, public navParams: NavParams, private api: ServicesCmsapiProvider) {
    // this.menuCtrl.enable(false, 'myMenu');

    this.fetchuserdetials();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
  }



  fetchuserdetials() {


    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.getuser(this.dbuserdetails.id).then(data => {

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
