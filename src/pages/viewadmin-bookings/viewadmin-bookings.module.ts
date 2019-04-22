import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewadminBookingsPage } from './viewadmin-bookings';

@NgModule({
  declarations: [
    ViewadminBookingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewadminBookingsPage),
  ],
})
export class ViewadminBookingsPageModule {}
