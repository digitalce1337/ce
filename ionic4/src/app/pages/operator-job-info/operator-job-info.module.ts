import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OperatorJobInfoPage } from './operator-job-info.page';
import { IonicStorageModule } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx'

const routes: Routes = [
  {
    path: '',
    component: OperatorJobInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule,
    
  ],
  declarations: [OperatorJobInfoPage]
})
export class OperatorJobInfoPageModule {}
