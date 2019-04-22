import { NewhomePage } from './../newhome/newhome';
import { AdminPage } from './../admin/admin';
import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { LoginPage } from './../login/login';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform, ToastController, MenuController } from 'ionic-angular';

/**
 * Generated class for the AdminloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminlogin',
  templateUrl: 'adminlogin.html',
})
export class AdminloginPage {
  userDetailsForm : FormGroup;

  adminsignupDetailsForm:  FormGroup;
  userResetForm:  FormGroup;
  name:any;
  email:any;
  number: any;
  password: any
  address: any;
  resetpassword: any;
  resetemail: any;

  showlogin= true;
  showsignup = false;
  showreset = false;
  loading: any;
  logindata: any;
  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private toastCtrl: ToastController,  public platform: Platform, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private fb: FormBuilder, public navParams: NavParams, private api: ServicesCmsapiProvider) {

    this.menuCtrl.enable(false, 'myMenu');


    this.userDetailsForm = this.fb.group({
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

    this.userResetForm = this.fb.group({
      password: new FormControl('')
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminloginPage');
  }

  onsubmitpinsignup(val) {
    console.log(val);
    this.presentLoadingDefault();
    this.loading.present().then(() => {
      this.api.signupnadmin(val.name, val.email, val.number, val.address, val.password).then(data => {
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
      this.api.loginnadmin(val.email, val.password).then(data => {
        console.log(data);
        if(data['success']) {
          // this.addtocart('succescolor', 'login successful')
          this.logindata = data;
          localStorage.setItem('admindetails', JSON.stringify(this.logindata['success']));
          console.log(this.logindata['success']);

          this.navCtrl.setRoot(AdminPage);
          // this.userDetailsForm.reset();


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

  gotoreset() {
    this.showreset = true;
    this.showsignup = false;
    this.showlogin = false;
    this.userDetailsForm.reset();
    this.adminsignupDetailsForm.reset();
  }

  resetadminpassword() {
    this.api.resetadminpassword(this.resetemail, this.resetpassword).then(data => {
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
