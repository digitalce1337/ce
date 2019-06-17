import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerAddOperatorPage } from './owner-add-operator.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerAddOperatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerAddOperatorPage]
})
export class OwnerAddOperatorPageModule {}
