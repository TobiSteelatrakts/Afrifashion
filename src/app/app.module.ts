import { WishlistPage } from './../pages/wishlist/wishlist';
import { SettingsPage } from './../pages/settings/settings';
import { FaqPage } from './../pages/faq/faq';
import { SuperadminloginPage } from './../pages/superadminlogin/superadminlogin';
import { SuperprofilePage } from './../pages/superprofile/superprofile';
import { ManagebannerPage } from './../pages/managebanner/managebanner';
import { ManageuserPage } from './../pages/manageuser/manageuser';
import { ManageadminPage } from './../pages/manageadmin/manageadmin';
import { SuperadminPage } from './../pages/superadmin/superadmin';
import { ViewadminBookingsPage } from './../pages/viewadmin-bookings/viewadmin-bookings';
import { ViewAdminProfilePage } from './../pages/view-admin-profile/view-admin-profile';
import { ViewProductTabPage } from './../pages/view-product-tab/view-product-tab';
import { AddProductTabPage } from './../pages/add-product-tab/add-product-tab';
import { AdminPage } from './../pages/admin/admin';
import { UserprofilePage } from './../pages/userprofile/userprofile';
import { SingleproductdetailsPage } from './../pages/singleproductdetails/singleproductdetails';
import { SafePipe } from './../pipes/safe/safe';
import { AdminloginPage } from './../pages/adminlogin/adminlogin';
import { PaymentPage } from './../pages/payment/payment';
import { OrdersPage } from './../pages/orders/orders';
import { CartPage } from './../pages/cart/cart';
import { ProductdetailsPage } from './../pages/productdetails/productdetails';
import { OrderdetailsPage } from './../pages/orderdetails/orderdetails';
import { NewhomePage } from './../pages/newhome/newhome';
import { AboutPage } from './../pages/about/about';
import { LoginPage} from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HomePage } from '../pages/home/home';
import { Diagnostic } from '@ionic-native/diagnostic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';
import { ServicesCmsapiProvider } from '../providers/services-cmsapi/services-cmsapi';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    NewhomePage,
    OrderdetailsPage,
    SuperprofilePage,
    SuperadminPage,
    ManageadminPage,
    ManageuserPage,
    ManagebannerPage,
    CartPage,
    ViewAdminProfilePage,
    LoginPage,
    OrdersPage,
    AdminPage,
    SafePipe,
    FaqPage,
    SuperadminloginPage,
    PaymentPage,
    UserprofilePage,
    AddProductTabPage,
    ViewadminBookingsPage,
    ViewAdminProfilePage,
    ViewProductTabPage,
    SettingsPage,
    WishlistPage,
    SingleproductdetailsPage,
    ProductdetailsPage,
    AdminloginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CartPage,
    OrdersPage,
    UserprofilePage,
    AddProductTabPage,
    ViewProductTabPage,
    ViewAdminProfilePage,
    AdminPage,
    SuperprofilePage,
    SuperadminPage,
    ManageadminPage,
    SuperadminloginPage,
    ManageuserPage,
    ManagebannerPage,
    OrderdetailsPage,
    SingleproductdetailsPage,
    AdminloginPage,
    ProductdetailsPage,
    ViewadminBookingsPage,
    ViewAdminProfilePage,
    NewhomePage,
    FaqPage,
    SettingsPage,
    OrdersPage,
    WishlistPage,
    LoginPage,
    PaymentPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Diagnostic,
    Network,

    SocialSharing,
    OpenNativeSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesCmsapiProvider,

  ]
})
export class AppModule {}
