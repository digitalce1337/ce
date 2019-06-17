import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';

@Component({
  selector: 'app-owner-operators',
  templateUrl: './owner-operators.page.html',
  styleUrls: ['./owner-operators.page.scss'],
})
export class OwnerOperatorsPage implements OnInit {

  constructor(private modal: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  viewOperator(event, email) {
    console.log("Viewing operator")
    //this.navCtrl.push(ViewoperatorPage, {'email':email});
    // const myModalOptions: ModalOptions = {
    //   enableBackdropDismiss: false
    // };

    // const myModal: Modal = this.modal.create(ViewoperatorPage, { email: email }, myModalOptions);
    // myModal.present();

    // myModal.onDidDismiss((data) => {
    //   console.log(data);
    //   this.getEmail(this.access_token);
    //   // this.getOperatorList(this.access_token);
    // });
    
  }

  emailShare() {
    console.log("email go!");
    this.navCtrl.navigateForward('/owner-add-operator');
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


}
