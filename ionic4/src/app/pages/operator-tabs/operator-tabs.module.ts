import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OperatorTabsPage } from './operator-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: OperatorTabsPage,
    children: [
      { path: 'operator-home', loadChildren: '../operator-home/operator-home.module#OperatorHomePageModule' },
      { path: 'operator-jobs', loadChildren: '../operator-jobs/operator-jobs.module#OperatorJobsPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/operator-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OperatorTabsPage]
})
export class OperatorTabsPageModule {}
