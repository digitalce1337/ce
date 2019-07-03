import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { AlertController, NavController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx'
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-operator-job-info',
  templateUrl: './operator-job-info.page.html',
  styleUrls: ['./operator-job-info.page.scss'],
})
export class OperatorJobInfoPage implements OnInit {

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
  lastImage: string = null;
  faults: any;
  faultOpt: any;
  faultsSelected: any;
  Desc: string;
  loading: any;
  LocLong: string;
  LocLat: string;
  allowloc: boolean;
  JobTitle: string;

  public base64Image: string;

  constructor(public _translate: TranslateService, public appprov: AppService, public alertCtrl: AlertController,
    public authService: AuthService, public storage: Storage, public navCtrl: NavController, public activeRoute: ActivatedRoute,
    public plt: Platform, public androidPermissions: AndroidPermissions, public file: File, public filetransfer: FileTransfer,
    public filepath: FilePath, public ASctrl: ActionSheetController, public loadingCtrl: LoadingController, public gloc: Geolocation,
    private webview: WebView, private camera: Camera) {
    this.activeRoute.queryParams.subscribe(params => {
      // console.log("Results: "+ params+ " OR: "+ params["TakeJid"]);
      this.jid = params["jid_op"];
      this.JobTitle = params["title_op"];
      console.log("Give result: " + this.jid);
      console.log("Give result: " + this.JobTitle);
    });
  }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('access_token').then((val) => {
        this.access_token = val;
        this._translateLanguage();        
        this.FaultOfVType();
        this.GetCurrentLoc();
      })
    });
  }

  private _translateLanguage(): void {
    // this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.take_photo = this._translate.instant("opjobdetails.take_photo");
    this.selectgallery = this._translate.instant("opjobdetails.selectgallery");
    this.txcamera = this._translate.instant("opjobdetails.txcamera");
    this.txfaults = this._translate.instant("opjobdetails.txfaults");
    this.txfilter = this._translate.instant("opjobdetails.txfilter");
    this.txoil = this._translate.instant("opjobdetails.txoil");
    this.txdiscs = this._translate.instant("opjobdetails.txdiscs");
    this.description = this._translate.instant("opjobdetails.description");
    this.submit = this._translate.instant("opjobdetails.submit");
    this.selectsource = this._translate.instant("opjobdetails.selectsource");
    this.errormsgtitle = this._translate.instant('opjobdetails.errormsgtitle');
    this.errormsg = this._translate.instant('opjobdetails.errormsg');
    this.reportmsgtitle = this._translate.instant('opjobdetails.reportmsgtitle');
    this.reportmsg = this._translate.instant('opjobdetails.reportmsg');
  }

  public GetCurrentLoc() {
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

  async showLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await this.loading.present();
  }


  public async presentAS() {
    let as = await this.ASctrl.create({
      header: this.selectsource,
      buttons: [
        {
          text: this.selectgallery,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: this.take_photo,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await as.present();
  }

  public takePicture(type) {
    var options = {
      quality: 30,
      targetWidth: 416,
      targetHeight: 416,
      sourceType: type,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
      if (this.plt.is('android') && type === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filepath.resolveNativePath(imagePath).then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currName, this.createFileName());
        });
      }
      else {
        var currName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currName, this.createFileName());
      }
    }, (err) => {
      console.log(err);
    })
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    console.log(newFileName);
    return newFileName;
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      console.log('error Copy');
      console.log(error);
    })
  }

  public pathForImage(img) {
    // console.log("Entering pathForImage check")
    if (img == null) return ''
    else {
      if (this.plt.is('android')) {
        console.log("Error here")
        // return this.file.dataDirectory + img;
        let IP = this.webview.convertFileSrc(this.file.dataDirectory + img);
        console.log("Image path given:",IP);
        return this.webview.convertFileSrc(this.file.dataDirectory + img);
        
      }
      else {
        //For IOS platform
        console.log("Error should be from here??")
        // return normalizeUrl(this.file.dataDirectory + img);                     
        return this.webview.convertFileSrc(this.file.dataDirectory + img);
      }
    }
  }
  
  public UploadImg() {
    // this.showLoader();
    if (this.lastImage != null || this.Desc != null) {
      // if(this.lastImage != null && this.Desc != null){
      this.showLoader();
      console.log('Upload Image entered!');
      var targetPath = this.file.dataDirectory + this.lastImage;
      var filename = this.lastImage;
      var options = {
        fileKey: 'file',
        fileName: filename,
        chunkedMode: false,
        params: { 'fileName': filename }
      }

      this.appprov.UploadReportImage(targetPath, options);
      this.InsertReport();
      this.navCtrl.navigateBack(['operator/tabs/operator-jobs']);
    } else {
      this.appprov.presentAlert(this.errormsgtitle, this.errormsg);
    }

  }

  public FaultOfVType() {
    var Vtype;

    this.appprov.OpGetvehType(this.access_token, this.jid).then((res: any) => {
      Vtype = res.vehicle_type;
      console.log(Vtype);

      switch (Vtype) {

        case 'Excavator': {
          this.faultOpt = [this.txfilter, this.txoil];
          break;
        }

        case 'Loader': {
          this.faultOpt = [this.txfilter, this.txoil, this.txdiscs];
          break;
        }

        case 'Dozer': {
          this.faultOpt = [this.txfilter, this.txoil, this.txdiscs];
          break;
        }

        case 'Truck': {
          this.faultOpt = [this.txfilter, this.txoil, this.txdiscs];
          break;
        }

        default: {
          this.faultOpt = [this.txfilter, this.txoil, this.txdiscs];
          break;
        }

      }
    })

  }
  async dismissLoader() {    
    setTimeout(()=>{
      this.loading.dismiss();
    },2000);
  //   await this.loading.dismiss();
  }

  public InsertReport() {

    this.faultsSelected = '{';
    console.log("inside insertreport");

    for (let i = 0; i < this.faultOpt.length; i++) {
      if (this.faults == null) {

        if (i == (this.faultOpt.length - 1)) {
          this.faultsSelected += this.faultOpt[i] + ':0';
          // this.faultsSelected += this.faultOpt[i];
        } else {
          this.faultsSelected += this.faultOpt[i] + ':0,';
          // this.faultsSelected += this.faultOpt[i];
        }

      } else {

        if (this.faults.indexOf(this.faultOpt[i]) > -1) {
          if (i == (this.faultOpt.length - 1)) {
            this.faultsSelected += this.faultOpt[i] + ':1';
            // this.faultsSelected += this.faultOpt[i];
          } else {
            this.faultsSelected += this.faultOpt[i] + ':1,';
            // this.faultsSelected += this.faultOpt[i];
          }
        } else {
          if (i == (this.faultOpt.length - 1)) {
            this.faultsSelected += this.faultOpt[i] + ':0';
            // this.faultsSelected += this.faultOpt[i];
          } else {
            this.faultsSelected += this.faultOpt[i] + ':0,';
            // this.faultsSelected += this.faultOpt[i];
          }
        }

      }

    }
    var location: string;
    if (this.allowloc) {
      location = this.LocLat + ',' + this.LocLong;
    }
    else {
      location = 'nil , nil';
    }

    this.faultsSelected += '}';

    const now = new Date();
    console.log('JID: ' + this.jid);
    console.log('Email from access token: ' + this.access_token);
    console.log('Serial No.: Get from JID + email');
    console.log('Model No.: ' + 'Get from JID + email');
    console.log('TimeStamp: ' + now);
    console.log('Type: Job Report');
    console.log("Image Loc: " + 'jobReport/' + this.lastImage);
    console.log("Desc: " + this.Desc);
    console.log("Location:" + location);
    console.log("faults: " + this.faultsSelected);
    var imageLoc = 'jobReport/' + this.lastImage;

    this.appprov.InsertReport(this.jid, this.access_token, 'Standard Report', imageLoc, this.Desc, location, this.faultsSelected).then((res) => {
      this.appprov.presentAlert(this.reportmsgtitle, this.reportmsg);
      console.log(res);
      console.log('report added sucessfully!');
      // this.loading.dismiss();
      this.dismissLoader();
      // this.navCtrl.pop();
      this.navCtrl.navigateBack(['operator/tabs/operator-jobs']);
    }, err => {
      console.log(err);
    })
  }



}
