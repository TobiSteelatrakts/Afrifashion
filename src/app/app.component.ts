import { WishlistPage } from './../pages/wishlist/wishlist';
import { FaqPage } from './../pages/faq/faq';
import { SuperadminPage } from './../pages/superadmin/superadmin';
import { AdminloginPage } from './../pages/adminlogin/adminlogin';
import { AdminPage } from './../pages/admin/admin';
import { UserprofilePage } from './../pages/userprofile/userprofile';
import { LoginPage } from './../pages/login/login';
import { CartPage } from './../pages/cart/cart';
import { AboutPage } from './../pages/about/about';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { OrdersPage } from '../pages/orders/orders';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  splash = true;
  pages: Array<{title: string, component: any, icon: string}>;
  retrievedObject = localStorage.getItem('userdetails');

  dbuserdetails = JSON.parse(this.retrievedObject);

  constructor(public platform: Platform, private social: SocialSharing, private toastCtrl: ToastController, private openNativeSettings: OpenNativeSettings, private alertCtrl: AlertController, public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
      // this.menuCtrl.swipeEnable(false);
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage, icon: 'home'},

      { title: 'About', component: AboutPage, icon: 'megaphone' },

      // { title: 'Share', component: SharePage, icon: 'share' },
      // { title: 'Chat', component: ChatPage, icon: 'chatboxes' },
      // { title: 'Settings', component: SettingsPage, icon: 'settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      setTimeout(() => {
        this.splash = false
        this.statusBar.styleDefault();
        this.splashScreen.hide();

      }, 4000);

//this.locationavail();
      // if(this.myservice.getmylocation()== true) {

      //   console.log('i not connected to loaction');
      //   this.statusBar.styleDefault();
      //   this.splashScreen.hide();

      // }

      // else {
      //   console.log('not connected to location');

      // }




    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //
    this.nav.push(page.component);

  }

  cart() {

    this.nav.push(CartPage);
  }

  faq() {
    this.nav.push(FaqPage);
  }
  settings() {
    this.nav.push(SettingsPage);
  }
  orders() {
    this.nav.push(OrdersPage);
  }
  userprofile() {
    this.nav.push(UserprofilePage);
  }
// locationavail() {

//   if(!this.myservice.isConnected()) {

//     console.log('i not connected');

//    this.splashScreen.hide();
//     this.Errornetwork ();



//   }

//   else {


//     console.log('i am connected to network');

//     this.myservice.getmylocation().then((result) => {

//       console.log(result);
//       if(result == true) {
//         console.log('i am enabled'+ result);
//         setTimeout(() => {
//           this.splash = false
//           this.statusBar.styleDefault();
//           this.splashScreen.hide();

//         }, 4000);


//       }

//       else {

//         console.log('i am not enabled'+ result);

//             this.splashScreen.hide();
//             this. Errorlocation();

//       }
//     });



//   }

// }


 Errorlocation() {
    let alert = this.alertCtrl.create({
      title: 'NO LOCATION',
      subTitle: 'Please Turn on Location',
      buttons: [

        {
          text: 'Go to Settings',
          handler: () => {
            console.log('Buy clicked');
            this.openNativeSettings.open('location');
            this.exitApp();
            // this.navCtrl.pop();
            // this.navCtrl.setRoot(HomePage);
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  Errornetwork() {
    let alert = this.alertCtrl.create({
      title: 'NO NETWORK',
      subTitle: 'Please Turn on Network',
      buttons: [

        {
          text: 'Go to Settings',
          handler: () => {
            console.log('Buy clicked');
            this.openNativeSettings.open('settings');
            this.exitApp();
            // this.navCtrl.pop();
            // this.navCtrl.setRoot(HomePage);
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }



//   getmylocation () {

//     this.geolocation.getCurrentPosition().then(position => {

//       console.log('got location');


//     },
//       (err) => {

//         console.log(err);

//         this.Errorlocation();
//         console.log('no location enabled');

//     }

//     );

// }

allchecks() {}

successtoast(colrtype, message, position) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 2000,
    cssClass: colrtype,
    position: position
  });

  toast.present();
}


  exitApp(){
  this.platform.exitApp();
  }

  Logout() {
    this.closeap();
  }



    // start of share code
    socialshare() {
      this.successtoast('succescolor','Available in version 2.0', 'top');
  // Share via email
  this.social.share('Kollatunez Tours App V.1', 'Lets meet, connect and have fun!').then(() => {
    // Success!
    this.presentToast();
  }).catch(() => {
    // Error!
  });


}


presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Shared Successfully',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();
}

closeap() {
  localStorage.clear();
  this.exit();
  }
  wishlist() {
    this.nav.push(WishlistPage);
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

}
