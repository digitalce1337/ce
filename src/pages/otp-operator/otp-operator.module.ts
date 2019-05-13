import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpOperatorPage } from './otp-operator';

@NgModule({
  declarations: [
    OtpOperatorPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpOperatorPage),
  ],
})
export class OtpOperatorPageModule {}
