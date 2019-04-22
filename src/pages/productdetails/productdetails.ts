import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductdetailsPage {
  slidearray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailsPage');
    this.slidearraymethod();
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
