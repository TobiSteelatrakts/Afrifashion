import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the SingleproductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singleproductdetails',
  templateUrl: 'singleproductdetails.html',
})
export class SingleproductdetailsPage {
  slidearray = [];
  prod: any;
  addtocartbool = false;
  adminname: any;
  adminnumber: any;
  adminndata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ServicesCmsapiProvider, private toastCtrl: ToastController) {

    this.prod = navParams.get('prod');
    localStorage.setItem('cat', this.prod.category_id );


// var integer = parseInt(this.prod.admin_id, 10);

//     console.log(this.prod.admin_id);
  }


  ionViewDidLoad() {
    this.getadminn(this.prod.admin_id);
    console.log('ionViewDidLoad SingleproductdetailsPage');
  }

  addtocard() {
    this.addtocartbool = true;
   this. addtocart();
    localStorage.setItem('product', JSON.stringify(this.prod) );
    localStorage.setItem('showcart', 'yes');
  }

  addtocart(){
    this.successtoast('succescolor','Item added to cart', 'top');
  }

  gotocart() {
    this.navCtrl.push(CartPage);

  }

  getadminn(id) {
    this,this.api.getadmin(id).then(data => {
      this.adminndata = data;
      console.log(this.adminndata)
      this.adminname = this.adminndata ['name'];
      this.adminnumber = this.adminndata ['number'];
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
