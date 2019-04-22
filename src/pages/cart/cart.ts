import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, MenuController } from 'ionic-angular';
import { NewhomePage } from '../newhome/newhome';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
   proddetails: any;
   showcart  = false;
   productdtailstojson: any;
   loading: any;
   booked = false;
   retrievedObject = localStorage.getItem('userdetails');

   dbuserdetails = JSON.parse(this.retrievedObject);
  constructor(public navCtrl: NavController,private menuCtrl: MenuController,public loadingCtrl: LoadingController,private toastCtrl: ToastController, public navParams: NavParams, private api: ServicesCmsapiProvider) {


    // this.menuCtrl.enable(false, 'myMenu');
   if(localStorage.getItem('product') != null) {
    this.proddetails = localStorage.getItem('product');
    this.productdtailstojson = JSON.parse(this.proddetails )
    this.showcart = true;
    // this.showcart = localStorage.getItem('showcart');
   } else {

   }

  }

  ionViewDidLoad() {
    // alert(this.productdtailstojson.id)
    console.log('ionViewDidLoad CartPage');
  }

  gotoproducts() {
    this.navCtrl.setRoot(NewhomePage);
  }

  placeorder() {
    this. presentLoadingDefault();
    this.loading.present().then(() => {

      this.api.orderproduct(this.productdtailstojson.id,this.productdtailstojson.admin_id, this.dbuserdetails.id).then(data => {
        console.log(data);

        if(data['success']) {

          this.addtocart('succescolor','Order created successfully')
          this.showcart==false;
          this.booked = true;

        }
        else {
          this.addtocart('errorcolor', 'Ooops Something Went Wrong');
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
      content: 'Placing your Order...'
    });
  }


  savesuggestion() {}

}
