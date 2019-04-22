import { FormControl } from '@angular/forms';
import { CartPage } from './../cart/cart';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/debounceTime';
declare var anime;


/**
 * Generated class for the NewhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newhome',
  templateUrl: 'newhome.html',
})
export class NewhomePage {

  productarray= [];
  allcategory: any;
  allbanners: any;
  slidearray = [];
  imagetag: any;
  gotdata = false;
  usersuggest: any;
  usersuggestmany: any;
  searched = false;


  myimages : any=[];



  drawerOptions: any;

  // search details
  searchTerm: string = '';
    items: any;
    searchControl: FormControl;
    searching = false;
  constructor(public navCtrl: NavController,public menuCtrl: MenuController, private sanitizer: DomSanitizer, public navParams: NavParams, private api: ServicesCmsapiProvider) {
    // this.menuCtrl.enable(true, 'myMenu');
    // this.menuCtrl.swipeEnable(false);
    this.searchControl = new FormControl();
     this.menuCtrl.enable(true, 'myMenu');
      this.menuCtrl.swipeEnable(true);
    this.getcategory();
    this.getbanners();



  }

  ionViewDidLoad() {
    this.productarraymethod();
   this. slidearraymethod() ;

   if(localStorage.getItem('cat')) {
     this.searched = true
    // this.showsuggestioncard(localStorage.getItem('cat'));
    this.getthemaysuggestion(localStorage.getItem('cat'))
   }
   this.myimages=this.api.myimages;
   console.log(this.myimages);
   this.setFilteredItems();
   this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
     this.searching = false;
     this.setFilteredItems();


 });
    console.log('ionViewDidLoad NewhomePage');

  }
  ionViewWillEnter() {

  }
  getItems() {}

  addtocard(prod) {

    localStorage.setItem('product', JSON.stringify(prod) );
    // localStorage.setItem('showcart', 'yes');
    this.navCtrl.push(CartPage);
  }


  productarraymethod() {
    this.productarray = [
      {'productname' : 'Airmax Air',
        'productimage': '/assets/prodimages/img1.jpg',
        'productprice': '#8000',
        'productdesc': 'This is a fish from ikoyim lagos'
     },
     {'productname' : 'Flav Airmax',
        'productimage': '/assets/prodimages/img2.jpg',
        'productprice': '#3000',
        'productdesc': 'This is a fish from ikoyim lagos'
     }
     ,
     {'productname' : 'Nike Sport',
        'productimage': '/assets/prodimages/img3.jpg',
        'productprice': '#4000',
        'productdesc': 'This is a fish from ikoyim lagos'
     }
     ,
     {'productname' : 'Smoove Air',
        'productimage': '/assets/prodimages/img4.jpg',
        'productprice': '#5000',
        'productdesc': 'This is a fish from ikoyim lagos'
     }

    ];
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

    tocategory(id: any) {
      this.navCtrl.push(HomePage, {
        id:id});
    }





    getcategory() {
   this.api.getallcategories().then(data => {

    console.log(data)
    this.allcategory = data;
   }) ;


    }



    getbanners() {
      this.api.getallbanners().then(data => {

       console.log(data)
       this.gotdata = true;
       this.allbanners = data;
      }) ;


       }

      tologin() {
        this.navCtrl.push(LoginPage);
      }



      showsuggestioncard(id) {
       this. getthesuggsetion(id);


       anime({
         targets: '#suggestcardid',
         translateY: '200px',
          duration: 2000,
          delay: 2000,
          opacity: 1,
          // direction: 'alternate',
          easing: 'easeInOutCirc',

       })
      }


      getthesuggsetion(id) {
        this.api.suggestproduct(id).then(data => {
          this.usersuggest = data;
          console.log(this.usersuggest);

         }) ;
      }

      getthemaysuggestion(id) {
        this.api.suggestmany(id).then(data => {
          this.usersuggestmany = data;
          console.log(this.usersuggestmany);

         }) ;
      }



      closeme() {
        anime({
          targets: '#suggestcardid',
          translateY: '-200px',
           duration: 1000,
           opacity: 0,
           // direction: 'alternate',
           easing: 'easeInOutCirc',

        })
      }
      onSearchInput(){
        this.searching = true;
      }


      setFilteredItems() {

        this.myimages = this.api.filterItems(this.searchTerm);

      }

      clickedsearch(ind) {
        alert(ind);
      }

}
