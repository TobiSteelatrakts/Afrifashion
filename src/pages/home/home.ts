import { AdminloginPage } from './../adminlogin/adminlogin';
import { SingleproductdetailsPage } from './../singleproductdetails/singleproductdetails';
import { LoginPage } from './../login/login';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, Platform, ToastController, LoadingController, NavParams, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServicesCmsapiProvider } from '../../providers/services-cmsapi/services-cmsapi';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  addressuser: any;
  getdevicepostion: any;
  logoutresponse: any;
  user: string;
  loggedin = false;

  loadingctr: any

  showbutton= false;

  productarray= [];
  wishlistarray = [];
  thenewarray = [];
  slidearray = [];
  categoryproduct: any;
  allbanners: any;
  id: any;
  gotdata = false;

  retrievedObject = localStorage.getItem('wishlist');

  dbuserdetails = JSON.parse(this.retrievedObject);
  wishlistidarray  = [];
  constructor(public navCtrl: NavController, private menuCtrl: MenuController,public navParams: NavParams,private api: ServicesCmsapiProvider, private toastCtrl: ToastController, public loadingCtrl: LoadingController,private alertCtrl: AlertController, public platform: Platform, private storage: Storage) {

    // this.menuCtrl.enable(false, 'myMenu');


    this.id = navParams.get('id');

    this.storage.get('touristname').then(data=>
      {
        if(data)
        {
       this.user = data

        }
        else {
          console.log("not logedin");
             }

        });

  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      // this.user = localStorage.getItem('touruser');
     this. productarraymethod();


  });

  }

  ionViewDidLoad() {

    this.slidearraymethod();
  }

  ionViewWillLoad() {
    this. getbanners() ;
   this. getproductbycategory(this.id)
  }



  toorders(prod: any) {
    this.navCtrl.push(SingleproductdetailsPage, {prod:prod});
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






  ionViewDidLeave() {


  }



  logout () {

    localStorage.clear();

          this.navCtrl.setRoot(AdminloginPage);
          this.loggedin = false;
          this.successtoast('succescolor','Logged out Successfully!', 'top');

  }
  login () {


      this.navCtrl.push(LoginPage);



}

isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

addtowishlist(wish, id) {

  // this.wishlistarray.push(wish);
  // console.log(this.wishlistarray)


  if (localStorage.getItem('wishlist') != null) {
    // alert('something present');
  let theval = localStorage.getItem('wishlist');
  let theid = localStorage.getItem('wishlistid');
  this.wishlistarray = JSON.parse(theval);

  this.wishlistidarray = JSON.parse(theid);

  // check if array contains a particular value
  var mySet = new Set(this.wishlistidarray);
  var hasB = mySet.has(id); // true
  if (hasB) {
    this.successtoast('errorcolor','aleady in your wishlist', 'top');
  }
  else {
    this.wishlistarray.push(wish);
    this.wishlistidarray.push(id);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistarray) );
    localStorage.setItem('wishlistid', JSON.stringify(this.wishlistidarray) );
    this.successtoast('succescolor','Success, added to wishlist!: '+wish. productname, 'top');
  }
  console.log(this.wishlistarray, 'something');
  console.log(this.wishlistidarray, 'somethingid');
  }
  else {
    // alert('nothing present');
    this.wishlistarray.push(wish);
    this.wishlistidarray.push(id);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistarray) );
    localStorage.setItem('wishlistid', JSON.stringify(this.wishlistidarray) );
    this.successtoast('succescolor','Success, added to wishlist!: '+wish. productname, 'top');
    console.log(this.wishlistarray, 'nothing')
    console.log(this.wishlistidarray, 'nothingid')
  }

  // console.log(this.wishlistarray)
  // if(!this.isEmpty(this.dbuserdetails)){

  //   // this.wishlistarray.push(wish);
  //   console.log('got here')
  // }

  // else {
  //   this.thenewarray = this.wishlistarray.push(wish)
  //   let toobj = Object.assign({}, this.wishlistarray.push(wish))
  //   this.successtoast('succescolor','Success, added to wishlist!'+ toobj, 'top');
  //   localStorage.setItem('wishlist', JSON.stringify(toobj) );
  //   console.log(toobj)
  // }
}

  closeap() {
    this.exit();
    }

    exit(){
      let alert = this.alertCtrl.create({
        title: 'Confirm',
        message: 'Do you want to exit?',
        buttons: [{
          text: "exit?",
          handler: () => { this.exitApp() }
        }, {
          text: "Cancel",
          role: 'cancel'
        }]
      })
      alert.present();
    }
    exitApp(){
    this.platform.exitApp();
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

    harraytoast(colrtype, message, position) {
      let toast = this.toastCtrl.create({
        message: message,
        cssClass: colrtype,
        position: position,
        duration: 5000,
        showCloseButton: true,
        closeButtonText:'X'
      });

      toast.present();
    }


    getproductbycategory(id) {

      this.api.getproductbycategory(id).then(data => {
         this.categoryproduct = data;
         this.gotdata = true;
        console.log(this.categoryproduct);
      });
    }

    getbanners() {
      this.api.getallbanners().then(data => {

       console.log(data)
       this.allbanners = data;
      }) ;


       }


}
