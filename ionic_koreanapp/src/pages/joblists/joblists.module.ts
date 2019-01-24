import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoblistsPage } from './joblists';

@NgModule({
  declarations: [
    JoblistsPage,
  ],
  imports: [
    IonicPageModule.forChild(JoblistsPage),
  ],
})
export class JoblistsPageModule {}
