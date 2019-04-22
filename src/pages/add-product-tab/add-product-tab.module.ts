import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductTabPage } from './add-product-tab';

@NgModule({
  declarations: [
    AddProductTabPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProductTabPage),
  ],
})
export class AddProductTabPageModule {}
