import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperprofilePage } from './superprofile';

@NgModule({
  declarations: [
    SuperprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(SuperprofilePage),
  ],
})
export class SuperprofilePageModule {}
