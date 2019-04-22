import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAdminProfilePage } from './view-admin-profile';

@NgModule({
  declarations: [
    ViewAdminProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAdminProfilePage),
  ],
})
export class ViewAdminProfilePageModule {}
