import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerAddVehiclePage } from './owner-add-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerAddVehiclePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerAddVehiclePage]
})
export class OwnerAddVehiclePageModule {}
