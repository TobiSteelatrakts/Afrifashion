import { NewhomePage } from './../newhome/newhome';
import { OrderdetailsPage } from './../orderdetails/orderdetails';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  prouduct:any;
  showorder = false;
  loading: any;
  allorder:any
  gotdata: any
  retrievedObject = localStorage.getItem('userdetails');

  dbuserdetails = JSON.parse(this.retrievedObject);
  constructor(public navCtrl: NavController,private menuCtrl: MenuController,public loadingCtrl: LoadingController,private api: ServicesCmsapiProvider, public navParams: NavParams) {

    this.getalluserorder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  gotoorderdetails() {
    this.navCtrl.push(OrderdetailsPage);
  }

  gotoproducts() {
    this.navCtrl.setRoot(NewhomePage);
  }

  getalluserorder() {
    this. presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.userorders(this.dbuserdetails.id).then(data => {

        this.gotdata = data

        if(this.gotdata['length'] != 0) {
          this.allorder = data
          console.log(this.allorder);
        }

        else {
          this.showorder = true;
        }

        this.loading.dismiss();
      })
    });


  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Fetching your Orders...'
    });
  }

}
