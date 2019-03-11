import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMaintenancePage } from './edit-maintenance';

@NgModule({
  declarations: [
    EditMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(EditMaintenancePage),
  ],
})
export class EditMaintenancePageModule {}
