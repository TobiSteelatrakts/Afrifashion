import { SuperadminloginPage } from './../superadminlogin/superadminlogin';
import { NewhomePage } from './../newhome/newhome';
import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { AdminloginPage } from './../adminlogin/adminlogin';

import { HomePage } from './../home/home';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ToastController, MenuController } from 'ionic-angular';
import { IonicPage, NavController,LoadingController, NavParams, Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
usernamee: string;
passwordd: string;
namee: string;
signined: any;
local:any;
touristnameset= false;
loggedin = false;
loadingctr: any;
profiledata: any;
userDetailsForm : FormGroup;

adminsignupDetailsForm:  FormGroup;
userResetForm:  FormGroup;


resetpassword: any;
resetemail: any;

name:any;
email:any;
number: any;
password: any
address: any;
loading: any
logindata: any;
showreset = false;

showlogin= true;
showsignup = false;
// error messages
account_validation_messages = {
  'username': [
    { type: 'required', message: 'Username is required' },
    // { type: 'minlength', message: 'Username must be at least 5 characters long' },
    // { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    // { type: 'pattern', message: 'Your username must contain only numbers and letters' },
    // { type: 'validUsername', message: 'Your username has already been taken' }
  ],
  'name': [
    { type: 'required', message: 'Name is required' },
    // { type: 'minlength', message: 'Username must be at least 5 characters long' },
    // { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    // { type: 'pattern', message: 'Your username must contain only numbers and letters' },
    // { type: 'validUsername', message: 'Your username has already been taken' }
  ],
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ],
  'confirm_password': [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'areEqual', message: 'Password mismatch' }
  ],
  'password': [
    { type: 'required', message: 'Password is required' }
    // { type: 'email', message: 'email is not valid' },
    // { type: 'minlength', message: 'Password must be at least 5 characters long' },

    // { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  ],
  'terms': [
    { type: 'pattern', message: 'You must accept terms and conditions' }
  ]
  }
  constructor(public navCtrl: NavController,private menuCtrl: MenuController, private api: ServicesCmsapiProvider, private fb: FormBuilder,private toastCtrl: ToastController, public platform: Platform, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController,private storage: Storage) {
    this.menuCtrl.enable(false, 'myMenu');
 var local = localStorage.getItem('userdetails');
    if(local != null) {
      navCtrl.setRoot(NewhomePage);
      // this.addtocart('succescolor', 'Welcome Back!')
    }
    else{

    }
    this.userDetailsForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.userResetForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    });

    this.adminsignupDetailsForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormControl(''),
      number: new FormControl('')
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminloginPage');
  }

  onsubmitpinsignup(val) {
    console.log(val);
    this.presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.signupuser(val.email, val.name, val.address, val.number, val.password).then(data => {
        console.log(data);
        if(data['success']) {
          this.addtocart('succescolor', 'Signup Successful, Please Login')
          this.logindata = data;

          this.showloginmethod();
        }
        else {
          this.addtocart('errorcolor', 'Ooops check your details')
        }
        this.loading.dismiss();
      });
    });
  }

  onsubmitpin(val) {
    console.log(val);
    this.presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.loginuser(val.email, val.password).then(data => {

        if(data['success']) {
          // this.addtocart('succescolor', 'login successful')
          this.logindata = data;
          console.log(this.logindata['success']);
          localStorage.setItem('userdetails', JSON.stringify(this.logindata['success']));
          // localStorage.setItem(', this.logindata['success']['id']);
          this.navCtrl.setRoot(NewhomePage);
          this.userDetailsForm.reset();
        } else if (data['error'].message) {
          this.addtocart('errorcolor', 'please check your login details')
        }
        else {
          this.addtocart('errorcolor', 'Ooops check your details')
        }
        this.loading.dismiss();
      });
    });

  }




    presentAlert() {
      this.userDetailsForm.get('username').reset();
      this.userDetailsForm.get('password').reset();
      let alert = this.alertCtrl.create({
        title: 'Invalid Login',
        subTitle: 'Invalid Username or Password',
        buttons: ['Dismiss']
      });
      alert.present();
    }



  showloginmethod() {
    this.showlogin = true;
    this.showsignup = false;
    this.userDetailsForm.reset();
    this.adminsignupDetailsForm.reset();
  }


  gotoreset() {
    this.showreset = true;
    this.showlogin = false;
    this.showsignup = false;
    this.userDetailsForm.reset();
    this.adminsignupDetailsForm.reset();
  }

  showsignupmethod() {
    this.showlogin = false;
    this.showsignup = true;
    this.userDetailsForm.reset();
    this.adminsignupDetailsForm.reset();
  }

  gotouser() {
    this.navCtrl.setRoot(LoginPage)
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
      content: 'Processing...'
    });
  }
  gotoadmin() {
    this.navCtrl.setRoot(AdminloginPage)
  }
  gotosuperadmin() {
    this.navCtrl.setRoot(SuperadminloginPage)
  }


gotoresetpass () {
  this.navCtrl.push(HomePage);
}

resetadminpassword() {
  this.api.resetuserpassword(this.resetemail, this.resetpassword).then(data => {
    console.log(data);
    if(!data['error']) {
      this.resetemail = '', this.resetpassword ='';
      this.successtoast('succescolor','Password reset successful', 'top');

    }

    else {
      this.resetemail = ''
      this.successtoast('errorcolor', 'No such email', 'top');
    }
  })
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


}
