import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProductTabPage } from './view-product-tab';

@NgModule({
  declarations: [
    ViewProductTabPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewProductTabPage),
  ],
})
export class ViewProductTabPageModule {}
