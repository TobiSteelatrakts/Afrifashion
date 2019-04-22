import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageuserPage } from './manageuser';

@NgModule({
  declarations: [
    ManageuserPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageuserPage),
  ],
})
export class ManageuserPageModule {}
