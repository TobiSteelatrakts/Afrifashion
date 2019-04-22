import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ViewProductTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-product-tab',
  templateUrl: 'view-product-tab.html',
})
export class ViewProductTabPage {
  loading: any;
  productdata: any;
  isempty = false;
  founddata: any;
  showupdate = false;
  prodname: any;
  prodprice: any;
  retrievedObject = localStorage.getItem('admindetails');

  dbuserdetails = JSON.parse(this.retrievedObject);
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ServicesCmsapiProvider, private toastCtrl: ToastController, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.fetchalladminproduct();

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ViewProductTabPage');
  }



  fetchalladminproduct() {
    this.presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.fetchadminproducts(this.dbuserdetails.id).then(data => {
        this.founddata = data;
        console.log(this.founddata);

        if(this.founddata['length'] != 0) {
          this.productdata = data;
         this.prodprice = this.founddata['productprice'];
         this.prodname = this.founddata['productname'];
          this.isempty = false;
        }
        else {
          this.isempty = true;
        }
        this.loading.dismiss();
      });
    });


  }

  updateproductdetails() {
    this.showupdate = ! this.showupdate;
  }

  updateprod(id) {

    this.api.updateproduct(id, this.prodname, this.prodprice ).then(data => {

      if(data['success']) {
        // this.successtoast('succescolor','deleted successfully', 'top');
        this.fetchalladminproduct();
        console.log(data)
      }


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



  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'View Your Products...'
    });
  }

  deleteproduct(id) {
    this.api.deleteproduct(id).then(data => {

      if(data['message']) {
        this.successtoast('errorcolor','deleted successfully', 'top');
        this.fetchalladminproduct();
      }


    });
  }

}
