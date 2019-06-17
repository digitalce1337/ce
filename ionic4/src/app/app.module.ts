import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage'
import { Facebook } from '@ionic-native/facebook/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AppService } from './services/app.service';
import { ApiService } from './apikey/api.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Http } from '@angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    AndroidPermissions,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppService,
    ApiService,
    File,
    Http,
    FileTransfer,
    FilePath,
    InAppBrowser,
    SocialSharing,
    MenuController
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
