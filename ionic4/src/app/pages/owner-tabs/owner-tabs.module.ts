import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OwnerTabsPage } from './owner-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: OwnerTabsPage,
    children: [
      { path: 'owner-home', loadChildren: '../owner-home/owner-home.module#OwnerHomePageModule' },
      { path: 'owner-jobs', loadChildren: '../owner-jobs/owner-jobs.module#OwnerJobsPageModule' },
      { path: 'owner-fleet', loadChildren: '../owner-fleet/owner-fleet.module#OwnerFleetPageModule' },
      { path: 'owner-operators', loadChildren: '../owner-operators/owner-operators.module#OwnerOperatorsPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/owner-home',
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
  declarations: [OwnerTabsPage]
})
export class OwnerTabsPageModule {}
