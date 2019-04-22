import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';

/**
 * Generated class for the ViewadminBookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewadmin-bookings',
  templateUrl: 'viewadmin-bookings.html',
})
export class ViewadminBookingsPage {
  loading: any;
  productdata: any;
  isempty = false;
  founddata: any;

  retrievedObject = localStorage.getItem('admindetails');

  dbuserdetails = JSON.parse(this.retrievedObject);

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ServicesCmsapiProvider, private toastCtrl: ToastController, private apii: ServicesCmsapiProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.fetchalladminbookings();
    console.log('ionViewDidLoad admin bookings');
  }



  fetchalladminbookings() {
    this.presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.fetchalladminbookings(this.dbuserdetails.id).then(data => {
            this.founddata = data;

         if(this.founddata['length'] != 0) {
              this.productdata = data;
              console.log(this.productdata)

            }
        else {
         this. isempty = true
        }
        this.loading.dismiss();
      });
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

  addtocart(color, value){
    this.successtoast(color,value, 'top');
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'View Orders...'
    });
  }
}
