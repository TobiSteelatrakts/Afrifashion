import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagebannerPage } from './managebanner';

@NgModule({
  declarations: [
    ManagebannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagebannerPage),
  ],
})
export class ManagebannerPageModule {}
