import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMaintenancePage } from './add-maintenance';

@NgModule({
  declarations: [
    AddMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(AddMaintenancePage),
  ],
})
export class AddMaintenancePageModule {}
