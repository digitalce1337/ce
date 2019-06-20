import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';
import { AppService } from 'src/app/services/app.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { OwnerAddOperatorPage } from '../owner-add-operator/owner-add-operator.page';
import { OwnerViewOperatorPage } from '../owner-view-operator/owner-view-operator.page';

@Component({
  selector: 'app-owner-operators',
  templateUrl: './owner-operators.page.html',
  styleUrls: ['./owner-operators.page.scss'],
})
export class OwnerOperatorsPage implements OnInit {

  public language: string;
  public title: string;
  public add_operator: string;
  public available: string;
  public busy: string;
  public downloadappmsgtitle: string;
  public downloadappmsg1: string;
  public downloadappmsg2: string;

  // private access_token: string;
  private access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';
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

  constructor(private modal: ModalController, public navCtrl: NavController, public modalCtrl: ModalController,
    private socialSharing: SocialSharing, public appprov: AppService, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getEmail(this.access_token); 
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

  async addOperator() {
    console.log('clicked');

    // const myModalOptions: ModalOptions = {
      // enableBackdropDismiss: false
    // };

    // const myModal: Modal = this.modal.create("AddoperatorPage", { access_token: this.access_token } , myModalOptions);
    // myModal.present();

    const myModal = await this.modalCtrl.create({component:OwnerAddOperatorPage, componentProps:{access_token: this.access_token,enableBackdropDismiss: false}});
    await myModal.present();
    myModal.dismiss((data) => {
      console.log(data);
      this.getEmail(this.access_token);
    });

    // myModal.onDidDismiss((data) => {
    //   console.log(data);
    //   this.getEmail(this.access_token);
    //   // this.getOperatorList(this.access_token);
    // });
  }

 async viewOperator(event, email) {
    console.log("Viewing operator")
    //this.nav.push(ViewoperatorPage, {'email':email});
    // const myModalOptions: ModalOptions = {
    //   enableBackdropDismiss: false
    // };

    // const myModal: Modal = this.modal.create("ViewoperatorPage", { email: email }, myModalOptions);
    // myModal.present();
    // myModal.onDidDismiss((data) => {
    //   console.log(data);
    //   this.getEmail(this.access_token);
    //   // this.getOperatorList(this.access_token);
    // });
    const myModal = await this.modalCtrl.create({component: OwnerViewOperatorPage, componentProps:{email: email,enableBackdropDismiss: false}});
    await myModal.present();
    myModal.dismiss((data) => {
      console.log(data);
      this.getEmail(this.access_token);
    });
  }

  emailShare() {
    console.log("email sharing here create OTP");
    // this.showLoader();
    // var OTP: any;
    // this.appprov.MakeOTP(this.access_token).then((res: any) => {
    //   console.log(res);
    //   OTP = res.otp;
    //   console.log('i am using this ' + OTP);

    //   // Check if sharing via email is supported
    //   this.socialSharing.canShareViaEmail()
    //     .then(
    //       res => {
    //         if (res == "OK") {
    //           console.log(res);
    //           // Share via email
    //           this.socialSharing.shareViaEmail(this.downloadappmsg1 + ': ' + OTP + " " + this.downloadappmsg2 + " " +
    //             'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', this.downloadappmsgtitle, [''])
    //             // 'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', this.downloadappmsgtitle, ['recipient@example.org'])
    //             .then(
    //               res => {
    //                 console.log("ShareViaEmail status: " + res);
    //               }, error => {
    //                 console.log("ShareViaEmail error: " + error);
    //               });
    //         }
    //       }, error => {
    //         console.log(error);
    //       });

    //   this.loading.dismiss();
    // })
  }

  async showLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    this.loading.present();
  }

}
