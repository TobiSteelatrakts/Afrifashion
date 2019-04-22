import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageadminPage } from './manageadmin';

@NgModule({
  declarations: [
    ManageadminPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageadminPage),
  ],
})
export class ManageadminPageModule {}
