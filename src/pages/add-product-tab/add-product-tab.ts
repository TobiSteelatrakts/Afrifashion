import { ServicesCmsapiProvider } from './../../providers/services-cmsapi/services-cmsapi';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddProductTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product-tab',
  templateUrl: 'add-product-tab.html',
})
export class AddProductTabPage {
  iamgefile: any;
  adminaddproductForm:  FormGroup;
  imagenotify: any;

  productname: any;
  productprice: any;
  productcategory: any;
  image: any;
  loading: any;

  productcategorydata: any[] = [
    {'name': 'Shoes',
    id: 1}
    ,
    {'name': 'Clothing',
    id: 2},
    {'name': 'Make-up',
    id: 3},
    {'name': 'Bags',
    id: 4},
    {'name': 'Fabrics',
    id: 5},
    {'name': 'Decoration',
    id: 6}
    ];
    retrievedObject = localStorage.getItem('admindetails');

    dbuserdetails = JSON.parse(this.retrievedObject);
  constructor(public navCtrl: NavController,private toastCtrl: ToastController, private apii: ServicesCmsapiProvider, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private fb: FormBuilder) {

    this.adminaddproductForm = this.fb.group({
      productname: new FormControl(''),
      productprice: new FormControl(''),
      productcategory: new FormControl(''),
      image: new FormControl(''),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductTabPage');
  }




  // onsubmitpinproduct(val) {
  //   console.log(val);
  // }

  onsubmitpinproduct(val) {
    console.log(val);


    console.log(this.iamgefile);
    const formData = new FormData();
    formData.append('image', this.iamgefile , this.iamgefile.name);
    formData.append('productname', val.productname);
    formData.append('productprice', val.productprice );
    formData.append('admin_id', this.dbuserdetails.id );
    formData.append('category_id', val.productcategory);

    this.presentLoadingDefault();
    this.loading.present().then(() => {

    this.apii.addproduct(formData).then(data => {
      console.log(data);
      if (data['success']) {
      this.addtocart('succescolor', 'Product Added Successfully');
      this.adminaddproductForm.reset();
      //  this.clickdonregstaff = false;
      //  this. isempty = false;
      //  toastr.success(data['success']);
      //  this.fetchuserstaffs(this.id);
       // let message = data['access_token'];
        // Subscribe if the user is logged in change its value to true;
       //  this.auth.changeAuthstatus(true);
       //  localStorage.setItem('token' , token );
       //  localStorage.setItem('user' , data['user'] );
       //  this.router.navigate(['/admin']);
      //  $('#addnewstaff').modal('hide');
      //  this.staffDetailsFormreg.reset();

      } else {
        this.addtocart('errorcolor', 'Ooops Something Went Wrong');

    //  this.clickdonregstaff = false;
    //  this.staffDetailsFormreg.reset();
      }
      this.loading.dismiss();

    });
  });
  }


  onFileChange(fil) {


    this.iamgefile = fil.target.files[0];
    console.log(this.iamgefile);
    const size  = fil.target.files[0].size;


    if (size > 1000000) {
       this.adminaddproductForm.get('productname').reset();
       this.imagenotify = 'must be < 1MB';

    } else {
      this.imagenotify = 'got it!';
    }


    // alert(this.iamgefile);
  }


    presentAlert() {
      this.adminaddproductForm.get('username').reset();
      this.adminaddproductForm.get('password').reset();
      let alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: 'Something went wrong',
        buttons: ['Dismiss']
      });
      alert.present();
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
        content: 'Adding Product...'
      });
    }


}
