import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';

/**
 * Generated class for the SuperprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-superprofile',
  templateUrl: 'superprofile.html',
})
export class SuperprofilePage {

  loading: any;
  superdetails: any;
 retrievedObject = localStorage.getItem('superdetails');

 dbuserdetails = JSON.parse(this.retrievedObject);

  constructor(public navCtrl: NavController,private menuCtrl: MenuController, public loadingCtrl: LoadingController, public navParams: NavParams, private api: ServicesCmsapiProvider) {
    this.menuCtrl.enable(false, 'myMenu');



  }

  ionViewWillLoad() {
    this.fetchuserdetials();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperprofilePage');

  }


  fetchuserdetials() {


    this.presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.getsuper(this.dbuserdetails.id).then(data => {

        this.superdetails = data;
        console.log(this.superdetails['name'])
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
