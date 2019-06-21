import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerAddMaintenancePage } from './owner-add-maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerAddMaintenancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerAddMaintenancePage]
})
export class OwnerAddMaintenancePageModule {}
