import { SuperadminPage } from './../superadmin/superadmin';
import { NewhomePage } from './../newhome/newhome';
import { AdminPage } from './../admin/admin';
import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { LoginPage } from './../login/login';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform, ToastController, MenuController } from 'ionic-angular';

/**
 * Generated class for the SuperadminloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-superadminlogin',
  templateUrl: 'superadminlogin.html',
})
export class SuperadminloginPage {
  userDetailsForm : FormGroup;

  adminsignupDetailsForm:  FormGroup;
  name:any;
  email:any;
  number: any;
  password: any
  address: any;

  showlogin= true;
  showsignup = false;
  loading: any;
  logindata: any;
  constructor(public navCtrl: NavController,private menuCtrl: MenuController,private toastCtrl: ToastController,  public platform: Platform, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private fb: FormBuilder, public navParams: NavParams, private api: ServicesCmsapiProvider) {
    this.menuCtrl.enable(false, 'myMenu');


    this.userDetailsForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    });

    this.adminsignupDetailsForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });

  }

    onsubmitpinsignup(val) {
    console.log(val);
    this.presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.signupsuper(val.name, val.email, val.password).then(data => {
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
      this.api.loginsuper(val.email, val.password).then(data => {
        console.log(data);
        if(data['success']) {
          this.addtocart('succescolor', 'login successful')
          this.logindata = data;
          localStorage.setItem('superdetails', JSON.stringify(this.logindata['success']));
          console.log(this.logindata['success']);

          this.navCtrl.setRoot(SuperadminPage);
          // this.userDetailsForm.reset();

        }
        else {
          this.addtocart('errorcolor', 'Ooops check your details')
        }
        this.loading.dismiss();
      });
    });

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
}
