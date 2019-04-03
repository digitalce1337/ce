import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser'
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { UpdatecapopPage } from '../pages/updatecapop/updatecapop';

import { FleetsPage } from '../pages/fleets/fleets';
import { OperatorsPage } from '../pages/operators/operators';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OperatorstabsPage } from '../pages/operatorstabs/operatorstabs';
import { OperatorhomePage } from '../pages/operatorhome/operatorhome';
import { OperatorjobPage } from '../pages/operatorjob/operatorjob';
import { OpjobdetailsPage } from '../pages/opjobdetails/opjobdetails';
import { OtpOperatorPage } from '../pages/otp-operator/otp-operator';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { LoginPage } from '../pages/login/login';
import { LoginKkPage } from '../pages/login-kk/login-kk';
import { RegisterPage } from '../pages/register/register';
import { JobsPage } from '../pages/jobs/jobs';
import { JoblistsPage } from '../pages/joblists/joblists'
import { FleetInfoPage } from '../pages/fleet-info/fleet-info';
import { AddvehiclePage } from "../pages/addvehicle/addvehicle";
import { AddjobPage } from '../pages/addjob/addjob';
import { ViewoperatorPage } from '../pages/viewoperator/viewoperator';
import { JobinfoPage } from '../pages/jobinfo/jobinfo';
import { CreatecompanyPage } from '../pages/createcompany/createcompany';
import { EditjobPage } from '../pages/editjob/editjob'

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgCalendarModule } from 'ionic2-calendar';
import { AppProvider } from '../providers/app/app';
import { Geolocation } from '@ionic-native/geolocation';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { KakaoCordovaSDK } from 'kakao-sdk';

import { Facebook } from '@ionic-native/facebook';
import { SocialSharing } from '@ionic-native/social-sharing';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
/*actual main module file of Angular that will be presented in browser*/
@NgModule({
  declarations: [
    MyApp,
    FleetsPage,
    OperatorsPage,
    HomePage,
    TabsPage,
    OperatorstabsPage,
    LoginPage,
    LoginKkPage,
    RegisterPage,
    JobsPage,
    FleetInfoPage,
    AddvehiclePage,
    JoblistsPage,
    AddjobPage,
    ViewoperatorPage,
    JobinfoPage,
    CreatecompanyPage,
    OperatorhomePage,
    OperatorjobPage,
    OpjobdetailsPage,
    EditjobPage,
    OtpOperatorPage,
    UpdatecapopPage
  ],
  /*
     importing browser module for making use of browser APs
     forRoot: ionic module used to customize ionic app if want to customize and not check inside ()
  */
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
    NgCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  /*below contains pages as in NgModule to tell angular keep comp. ready in use to make use anytime angular takes time to load*/
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FleetsPage,
    OperatorsPage,
    HomePage,
    TabsPage,
    OperatorstabsPage,
    LoginPage,
    LoginKkPage,
    RegisterPage,
    JobsPage,
    FleetInfoPage,
    AddvehiclePage,
    JoblistsPage,
    AddjobPage,
    ViewoperatorPage,
    JobinfoPage,
    CreatecompanyPage,
    OperatorhomePage,
    OperatorjobPage,
    OpjobdetailsPage,
    EditjobPage,
    OtpOperatorPage,
    UpdatecapopPage
  ],

  /*user service to be provided in the ionic*/
  providers: [
    StatusBar,
    SplashScreen,
    Camera, AndroidPermissions,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    AppProvider,
    InAppBrowser,
    KakaoCordovaSDK,
    File,
    FileTransfer,
    FilePath,
    Facebook,
    SocialSharing
  ]
})
export class AppModule { }
