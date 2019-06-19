import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerEditJobPage } from './owner-edit-job.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerEditJobPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerEditJobPage]
})
export class OwnerEditJobPageModule {}
