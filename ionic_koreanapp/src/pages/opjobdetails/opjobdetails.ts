import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,normalizeURL, Platform, ActionSheetController, LoadingController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import {FilePath } from '@ionic-native/file-path';
import { Geolocation } from '@ionic-native/geolocation';
import { TranslateService } from '@ngx-translate/core';
import { apiKey } from '../../app/apiurls/serverurls.js';

/**
 * Generated class for the OpjobdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-opjobdetails',
  templateUrl: 'opjobdetails.html',
})
export class OpjobdetailsPage {

  public language: string;
  public take_photo: string;
  public selectgallery: string;
  public txcamera: string;
  public txfaults: string;
  public txfilter: string;
  public txoil: string;
  public txdiscs: string;
  public description: string;
  public submit: string;
  public selectsource: string;
  public errormsgtitle: string;
  public errormsg: string;
  public reportmsgtitle: string;
  public reportmsg: string;

  access_token: any;
  jid: any;
  image: any;
  lastImage:string = null;
  faults: any;
  faultOpt: any;
  faultsSelected: any;
  Desc: string;
  loading:any;
  LocLong:string;
  LocLat:string;
  allowloc:boolean;
  JobTitle: string;

  public base64Image: string;
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage:Storage,
    public appprov:AppProvider,
    private camera:Camera,
    public plt:Platform,
    public androidPermissions:AndroidPermissions,
    public file:File,
    public filetransfer:FileTransfer,
    public filepath: FilePath,
    public ASctrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public gloc:Geolocation,
    public _translate: TranslateService) {

      storage.ready().then(() => {
      });
      storage.get('access_token').then((val) => {
        if (val == null){
          console.log("No acccess token");
          this.navCtrl.push(LoginPage);
        }
        else{
          this.image = apiKey + 'static/vehicles/Others.png';          
          // this.image = 'http://localhost:8000/static/vehicles/Others.png';
          console.log("Got access token");
          this.access_token = val.toString();
          this.jid = navParams.get('Jid');
          this.JobTitle = navParams.get('JTitle')
          console.log(this.jid);
          this.FaultOfVType();
          this.GetCurrentLoc();
          this._initializeTranslation();
        }
      });

  }

  public GetCurrentLoc(){
    console.log('Getting GeLocation');
      this.gloc.getCurrentPosition().then((res) => {
        console.log('Sucessfully gathered Location');
        console.log(res.coords.latitude);
        console.log(res.coords.longitude);
        this.LocLat = res.coords.latitude.toString();
        this.LocLong = res.coords.longitude.toString();
        this.allowloc = true;
      }, err => {
        this.allowloc = false;
      });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad OpjobdetailsPage');
    this._initializeTranslation();
  }

  public changeLanguage(): void{
    this._translateLanguage();
  }
   
  private _translateLanguage() : void{
    this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.take_photo =  this._translate.instant("opjobdetails.take_photo");
      this.selectgallery =  this._translate.instant("opjobdetails.selectgallery");
      this.txcamera =  this._translate.instant("opjobdetails.txcamera");
      this.txfaults =  this._translate.instant("opjobdetails.txfaults");
      this.txfilter =  this._translate.instant("opjobdetails.txfilter");
      this.txoil =  this._translate.instant("opjobdetails.txoil");
      this.txdiscs =  this._translate.instant("opjobdetails.txdiscs");
      this.description =  this._translate.instant("opjobdetails.description");
      this.submit =  this._translate.instant("opjobdetails.submit");
      this.selectsource =  this._translate.instant("opjobdetails.selectsource");
      this.errormsgtitle = this._translate.instant('opjobdetails.errormsgtitle');
      this.errormsg = this._translate.instant('opjobdetails.errormsg');
      this.reportmsgtitle = this._translate.instant('opjobdetails.reportmsgtitle');
      this.reportmsg = this._translate.instant('opjobdetails.reportmsg');
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }


public presentAS(){
  let as = this.ASctrl.create({
    title: this.selectsource,
    buttons: [
      {
        text: this.selectgallery,
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }},
        {
          text: this.take_photo,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA)
          }
        },
        {
          text:'Cancel',
          role:'cancel'
        }
    ]
  });
  as.present();
}

public takePicture(type){
  var options = {
    quality: 30,
    targetWidth:416,
    targetHeight:416,
    sourceType:type,
    saveToPhotoAlbum:false,
    correctOrientation:true
  };

  this.camera.getPicture(options).then((imagePath) => {
    if(this.plt.is('android') && type === this.camera.PictureSourceType.PHOTOLIBRARY){
      this.filepath.resolveNativePath(imagePath).then(filePath => {
        let correctPath = filePath.substr(0,filePath.lastIndexOf('/') + 1);
        let currName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        this.copyFileToLocalDir(correctPath,currName,this.createFileName());
      });
    }
    else{
      var currName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0,imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath,currName,this.createFileName());
    }
  }, (err) => {
    console.log(err);
  })
}

private createFileName(){
  var d = new Date(),
  n = d.getTime(),
  newFileName = n + ".jpg";
  console.log(newFileName);
  return newFileName;
}

private copyFileToLocalDir(namePath,currentName,newFileName){
  this.file.copyFile(namePath,currentName,this.file.dataDirectory,newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    console.log('error Copy');
    console.log(error);
  })
}

public pathForImage(img){
  if(img == null) return ''
  else {
    if(this.plt.is('android')){
      return this.file.dataDirectory + img;
    }
    else {
      return normalizeURL(this.file.dataDirectory + img);
    }
  }
}

public UploadImg(){
  // this.showLoader();
  if(this.lastImage != null || this.Desc != null){
  // if(this.lastImage != null && this.Desc != null){
    this.showLoader();
    console.log('Upload Image entered!');
    var targetPath = this.file.dataDirectory + this.lastImage;
    var filename = this.lastImage;
    var options = {
      fileKey:'file',
      fileName: filename,
      chunkedMode:false,
      params:{'fileName': filename}
    }
  
    this.appprov.UploadReportImage(targetPath,options);
    this.InsertReport();
  }else{
    this.appprov.presentAlert(this.errormsgtitle,this.errormsg);
  }
  
}

public FaultOfVType(){
  var Vtype;

  this.appprov.OpGetvehType(this.access_token,this.jid).then((res:any) => {
    Vtype = res.vehicle_type;
    console.log(Vtype);

    switch(Vtype){

      case 'Excavator':{
        this.faultOpt = [this.txfilter, this.txoil];
        break;
      }
  
      case 'Loader':{
        this.faultOpt = [this.txfilter,this.txoil, this.txdiscs];
        break;
      }
  
      case 'Dozer':{
        this.faultOpt = [this.txfilter,this.txoil,this.txdiscs];
        break;
      }
  
      case 'Truck':{
        this.faultOpt = [this.txfilter,this.txoil,this.txdiscs];
        break;
      }
  
      default:{
        this.faultOpt = [this.txfilter,this.txoil,this.txdiscs];
        break;
      }
  
    }
  })

}

public InsertReport(){

  this.faultsSelected = '{';

  for(let i = 0; i < this.faultOpt.length; i++){
    if(this.faults == null ){

      if(i == (this.faultOpt.length - 1)){
        this.faultsSelected += this.faultOpt[i] + ':0';
        // this.faultsSelected += this.faultOpt[i];
      }else{
        this.faultsSelected += this.faultOpt[i] + ':0,';
        // this.faultsSelected += this.faultOpt[i];
      }

    }else{

      if(this.faults.indexOf(this.faultOpt[i]) > -1){
        if(i == (this.faultOpt.length - 1)){
          this.faultsSelected += this.faultOpt[i] + ':1';
          // this.faultsSelected += this.faultOpt[i];
        }else{
          this.faultsSelected += this.faultOpt[i] + ':1,';
          // this.faultsSelected += this.faultOpt[i];
        }
      }else{
        if(i == (this.faultOpt.length - 1)){
          this.faultsSelected += this.faultOpt[i] + ':0';
          // this.faultsSelected += this.faultOpt[i];
        }else{
          this.faultsSelected += this.faultOpt[i] + ':0,';
          // this.faultsSelected += this.faultOpt[i];
        }
      }

    }
    
  }
  var location: string;
  if(this.allowloc){
    location = this.LocLat + ',' + this.LocLong;
  }
  else{
    location = 'nil , nil';
  }

  this.faultsSelected += '}';

  const now = new Date();
  console.log('JID: ' + this.jid);
  console.log('Email from access token: ' + this.access_token);
  console.log('Serial No.: Get from JID + email');
  console.log('Model No.: ' + 'Get from JID + email');
  console.log('TimeStamp: ' + now);
  console.log('Type: Job Report' );
  console.log("Image Loc: " + 'jobReport/' + this.lastImage);
  console.log("Desc: " + this.Desc);
  console.log("Location:" + location);
  console.log("faults: " + this.faultsSelected);
  var imageLoc = 'jobReport/'+this.lastImage;

  this.appprov.InsertReport(this.jid,this.access_token,'Standard Report',imageLoc,this.Desc,location,this.faultsSelected).then((res) => {
    this.appprov.presentAlert(this.reportmsgtitle, this.reportmsg);
    console.log(res);
    console.log('report added sucessfully!');
    this.loading.dismiss();
    this.navCtrl.pop();
  }, err => {
    console.log(err);
  })
}

}
