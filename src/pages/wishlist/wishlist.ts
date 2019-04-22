import { HomePage } from './../home/home';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NewhomePage } from '../newhome/newhome';

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  isempty = false;
  // arraywishlist = []


  dbuserdetailsid : any;
  productdtailstojson: any;
  wishid : any;
  wishidjson: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    if(localStorage.getItem('wishlist') != null  && JSON.parse(localStorage.getItem('wishlist') ) != []) {
      this.dbuserdetailsid = localStorage.getItem('wishlist');
      this.productdtailstojson = JSON.parse(this.dbuserdetailsid )
      this.wishid = localStorage.getItem('wishlistid');
      this.wishidjson = JSON.parse(this.wishid )
      // this.showcart = localStorage.getItem('showcart');
     } else {
   this.isempty = true;
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  addtocard(prod) {

    localStorage.setItem('product', JSON.stringify(prod) );
    // localStorage.setItem('showcart', 'yes');
    this.navCtrl.push(CartPage);
  }
  gotoproducts() {
    this.navCtrl.push(NewhomePage);
  }

  removewish (id) {
    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for( var i = 0; i < this.productdtailstojson.length; i++){
   if ( this.productdtailstojson[i]['id'] === id) {

 let  newarray =  this.productdtailstojson.splice(i, 1);
let newarrayid = this.wishidjson.splice(i, 1);
 localStorage.setItem('wishlist', JSON.stringify(this.productdtailstojson) );
 localStorage.setItem('wishlistid', JSON.stringify(this.wishidjson) );
    //  alert('there');
    this.successtoast('succescolor','Removed successfully', 'top');
    if(this.productdtailstojson.length === 0) {
      this.isempty = true;
      localStorage.removeItem('wishlistid');
      localStorage.removeItem('wishlist');
    }

   }
   else {
    //  alert('not there');
   }


}
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
