import { SafePipe } from './../../pipes/safe/safe';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewhomePage } from './newhome';

@NgModule({
  declarations: [
    NewhomePage,
    SafePipe,
  ],
  imports: [
    SafePipe,
    IonicPageModule.forChild(NewhomePage),
  ],
})
export class NewhomePageModule {}
