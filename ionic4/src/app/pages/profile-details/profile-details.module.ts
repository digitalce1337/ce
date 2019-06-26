import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileDetailsPage } from './profile-details.page';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProfileDetailsPage]
})
export class ProfileDetailsPageModule {}
