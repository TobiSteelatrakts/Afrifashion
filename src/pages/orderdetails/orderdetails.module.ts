import { SafePipe } from './../../pipes/safe/safe';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderdetailsPage } from './orderdetails';

@NgModule({
  declarations: [
    OrderdetailsPage,
    SafePipe
  ],
  imports: [
    IonicPageModule.forChild(OrderdetailsPage),
  ],
})
export class OrderdetailsPageModule {}
