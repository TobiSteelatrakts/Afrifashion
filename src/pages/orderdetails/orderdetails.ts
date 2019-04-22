import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {
  slidearray = [];
  prod: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.prod = navParams.get('prod');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }

  slidearraymethod() {
    this.slidearray = [
      {'slidename' : 'Fish',
        'slideimage': '/assets/prodimages/slidee3.jpg',

        'productdesc': 'This is a fish from ikoyim lagos'
     },
     {'slidename' : 'Fish',
     'slideimage': '/assets/prodimages/slidee1.jpg',

     'productdesc': 'This is a fish from ikoyim lagos'
  },
  {'slidename' : 'Fish',
  'slideimage': '/assets/prodimages/slide2.jpg',

  'productdesc': 'This is a fish from ikoyim lagos'
}
    ]
    }

}
