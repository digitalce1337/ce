import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerOperatorsPage } from './owner-operators.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerOperatorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OwnerOperatorsPage]
})
export class OwnerOperatorsPageModule {}
