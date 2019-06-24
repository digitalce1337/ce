import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerFleetInfoPage } from './owner-fleet-info.page';
import { NgCalendarModule } from 'ionic2-calendar';

const routes: Routes = [
  {
    path: '',
    component: OwnerFleetInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerFleetInfoPage]
})
export class OwnerFleetInfoPageModule {}
