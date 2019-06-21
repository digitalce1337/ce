import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerEditMaintenancePage } from './owner-edit-maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerEditMaintenancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerEditMaintenancePage]
})
export class OwnerEditMaintenancePageModule {}
