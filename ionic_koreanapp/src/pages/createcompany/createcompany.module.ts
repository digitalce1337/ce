import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatecompanyPage } from './createcompany';

/*Module file of Angular */
@NgModule({
  declarations: [
    CreatecompanyPage,
  ],
  
  /*importing browser module for making use of browser APs*/ 
  imports: [
    IonicPageModule.forChild(CreatecompanyPage),
  ],
})
export class CreatecompanyPageModule {}
