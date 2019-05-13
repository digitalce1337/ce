import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Modal, ModalOptions, LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';
import { AuthProvider } from '../../providers/auth/auth';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { ViewoperatorPage } from '../../pages/viewoperator/viewoperator';
import { LoginPage } from '../../pages/login/login';
import { KakaoCordovaSDK, KLCustomTemplate } from 'kakao-sdk';
import { TranslateService } from '@ngx-translate/core';
import { Facebook } from '@ionic-native/facebook';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-operators',
  templateUrl: 'operators.html'
})
export class OperatorsPage {

  public language: string;
  public title: string;
  public add_operator: string;
  public available: string;
  public busy: string;
  public downloadappmsgtitle: string;
  public downloadappmsg1: string;
  public downloadappmsg2: string;

  private access_token: string;
  public UsrEmail: any;
  loading: any;

  operators: Array<{
    operatorlist: string,
    operatordetails_profileurl: string,
    operatordetails_name: string,
    operatordetails_role: string,
    operatordetails_status: string,
    operatordetails_vehicles: string,
    operatordetails_busydate: string
  }>;

  public operatorlist: string[];
  public operatordetails_profileurl: string[];
  public operatordetails_name: string[];
  public operatordetails_role: string[];
  public operatordetails_status: string[];
  public operatordetails_vehicles: string[];
  public operatordetails_busydate: string[];

  constructor(public navCtrl: NavController,
    public http: Http,
    public authService: AuthProvider,
    public navParams: NavParams,
    public appprov: AppProvider,
    private modal: ModalController,
    private storage: Storage,
    public _kakaoCordovaSDK: KakaoCordovaSDK,
    public facebookNative: Facebook,
    public loadingCtrl: LoadingController,
    public _translate: TranslateService,
    private socialSharing: SocialSharing
    ) {
    storage.ready().then(() => {
    });
    storage.get('access_token').then((val) => {
      if (val == null) {
        console.log("No acccess token");
        this.navCtrl.push(LoginPage);
      }
      else {
        console.log("Got access token");           
        this.access_token = val.toString();     
        this.getEmail(this.access_token)   
        // this.getOperatorList(this.access_token);        
        this._initializeTranslation();
      }
    });
  }

  ionViewDidEnter() {
    this.getEmail(this.access_token);
    this._initializeTranslation();
  }
  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("operators.title");
    this.available = this._translate.instant("operators.available");
    this.busy = this._translate.instant("operators.busy");
    this.add_operator = this._translate.instant("operators.add_operator");
    this.downloadappmsgtitle = this._translate.instant("operators.downloadappmsgtitle");
    this.downloadappmsg1 = this._translate.instant("operators.downloadappmsg1");
    this.downloadappmsg2 = this._translate.instant("operators.downloadappmsg2");
  }


  getEmail(access_token) {
    this.appprov.getEmail(access_token).then((res) => {
      this.UsrEmail = res;
      this.getOperatorList(this.UsrEmail);
    }, err => {
      console.log(err);
    });
  }

  getOperatorList(email) {
    email = JSON.stringify(email);
    email = JSON.parse(email).email;
    this.appprov.getOperatorList(this.access_token, email).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      this.operatorlist = data['operatorlist'];
      console.log(this.operatorlist);
      this.operatordetails_profileurl = data['operatordetails_profileurl'];
      this.operatordetails_name = data['operatordetails_name'];
      this.operatordetails_role = data['operatordetails_role'];
      this.operatordetails_status = data['operatordetails_status'];
      this.operatordetails_vehicles = data['operatordetails_vehicles'];
      this.operatordetails_busydate = data['operatordetails_role'];
      this.operators = [];
      console.log("fist checkpoint");
      console.log(this.operatordetails_name.length);
      // for (let i = 0; i < this.operatordetails_profileurl.length; i++) {
      for (let i = 0; i < this.operatordetails_name.length; i++) {
        if (this.operatordetails_status[i] == "1") {
          this.operatordetails_status[i] = "assets/imgs/greencircle.jpg";
          this.operatordetails_busydate[i] = this.available;
        }
        else {
          let year = this.operatordetails_status[i].substring(0, 4);
          let month2 = month[parseInt(this.operatordetails_status[i].substring(5, 7)) - 1];
          let day = this.operatordetails_status[i].substring(8, 10);
          let date = day + " " + month2 + " " + year;
          this.operatordetails_busydate[i] = this.busy + date.toString();
          this.operatordetails_status[i] = "assets/imgs/redcircle.png";
        }
        if (this.operatordetails_vehicles[i] == "") {
          this.operators.push({
            operatorlist: this.operatorlist[i],
            operatordetails_profileurl: this.operatordetails_profileurl[i],
            operatordetails_name: this.operatordetails_name[i],
            operatordetails_role: this.operatordetails_role[i],
            operatordetails_status: this.operatordetails_status[i],
            operatordetails_vehicles: "",
            operatordetails_busydate: this.operatordetails_busydate[i],
          })
        }
        else {
          console.log("pushing");
          console.log(this.operatorlist);
          this.operators.push({
            operatorlist: this.operatorlist[i],
            operatordetails_profileurl: this.operatordetails_profileurl[i],
            operatordetails_name: this.operatordetails_name[i],
            operatordetails_role: this.operatordetails_role[i],
            operatordetails_status: this.operatordetails_status[i],
            operatordetails_vehicles: this.operatordetails_vehicles[i],
            operatordetails_busydate: this.operatordetails_busydate[i],
          })
        }
      }
    }, err => {
      console.log(err);
    });
  }

  addOperator() {
    console.log('clicked');

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModal: Modal = this.modal.create("AddoperatorPage", { access_token: this.access_token }, myModalOptions);
    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log(data);
      this.getEmail(this.access_token);
      // this.getOperatorList(this.access_token);
    });
  }

  viewOperator(event, email) {
    console.log("Viewing operator")
    //this.navCtrl.push(ViewoperatorPage, {'email':email});
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModal: Modal = this.modal.create(ViewoperatorPage, { email: email }, myModalOptions);
    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log(data);
      this.getEmail(this.access_token);
      // this.getOperatorList(this.access_token);
    });
  }

  kkShare() {
    this.showLoader();
    var OTP: any;
    this.appprov.MakeOTP(this.access_token).then((res: any) => {
      console.log(res);
      OTP = res.otp;
      console.log('i am using this' + OTP);

      console.log("Going to kakao invite api");

      let InviteTemplate: KLCustomTemplate = {
        templateId: '13618',
        title: this.downloadappmsgtitle,
        description: this.downloadappmsg1 + ': ' + OTP + this.downloadappmsg2
      };
      this._kakaoCordovaSDK.sendLinkCustom(InviteTemplate).then(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      )

      this.loading.dismiss();

    })
  }

  // fbShare() {
  //   this.showLoader();
  //   var OTP: any;
  //   var appUrl = "http://play.google.com/store/apps/details?id=com.digitalce.digitalce";

  //   if (this.platform.is('android')) {
  //     appUrl = "http://play.google.com/store/apps/details?id=com.digitalce.digitalce";
  //   }
  //   else if (this.platform.is('ios')) {
  //     appUrl = "";
  //   }

  //   this.appprov.MakeOTP(this.access_token).then((res: any) => {
  //     console.log(res);
  //     OTP = res.otp;
  //     console.log('i am using this ' + OTP);

  //     this.socialSharing.canShareVia("com.facebook.katana")
  //       .then(
  //         res => {
  //           if (res == "OK") {
  //             console.log("canShareVia, with response- " + res);
  //             //"https://brigade-electronics.com/wp-content/uploads/2016/04/volvo-construction-equipment-791x500.jpg"
  //             this.socialSharing.shareViaFacebookWithPasteMessageHint(this.downloadappmsg1 + ': ' + OTP + " " + this.downloadappmsg2,
  //               null, appUrl, this.downloadappmsgtitle + " " + this.downloadappmsg1 + ': ' + OTP + " " + this.downloadappmsg2)
  //               .catch(ex => {
  //                 console.log(ex);
  //               })
  //               .then(
  //                 res => {
  //                   console.log("shareViaFacebook: Success, with response- " + res);
  //                 }, error => {
  //                   console.log(error);
  //                   this.loading.dismiss();
  //                 }
  //               );
  //           }
  //         }, error => {
  //           console.log(error);
  //           this.loading.dismiss();
  //         }
  //       );

  //     this.loading.dismiss();
  //   })
  // }

  emailShare() {
    this.showLoader();
    var OTP: any;
    this.appprov.MakeOTP(this.access_token).then((res: any) => {
      console.log(res);
      OTP = res.otp;
      console.log('i am using this ' + OTP);

      // Check if sharing via email is supported
      this.socialSharing.canShareViaEmail()
        .then(
          res => {
            if (res == "OK") {
              console.log(res);
              // Share via email
              this.socialSharing.shareViaEmail(this.downloadappmsg1 + ': ' + OTP + " " + this.downloadappmsg2 + " " +
                'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', this.downloadappmsgtitle, [''])
                // 'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', this.downloadappmsgtitle, ['recipient@example.org'])
                .then(
                  res => {
                    console.log("ShareViaEmail status: " + res);
                  }, error => {
                    console.log("ShareViaEmail error: " + error);
                  });
            }
          }, error => {
            console.log(error);
          });

      this.loading.dismiss();
    })
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    this.loading.present();
  }
}
