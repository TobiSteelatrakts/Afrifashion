import { SafePipe } from './../../pipes/safe/safe';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleproductdetailsPage } from './singleproductdetails';

@NgModule({
  declarations: [
    SingleproductdetailsPage,
    SafePipe
  ],
  imports: [
    IonicPageModule.forChild(SingleproductdetailsPage),
  ],
})
export class SingleproductdetailsPageModule {}
