import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerJobInfoPage } from './owner-job-info.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerJobInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerJobInfoPage]
})
export class OwnerJobInfoPageModule {}
