import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-owner-job-info',
  templateUrl: './owner-job-info.page.html',
  styleUrls: ['./owner-job-info.page.scss'],
})
export class OwnerJobInfoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  editJob(){
    console.log("editing");
    // this.nav.push(EditjobPage, {'jid':this.jid, 'access_token':this.access_token});
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //       token: this.access_token,
    //       id: this.jid
    //   }
    // };
    // this.navCtrl.navigateForward('/EditjobPage', navigationExtras);
    this.navCtrl.navigateForward('/owner-edit-job');
    // this.nav.push(EditjobPage, {'access_token':this.access_token,'jid':this.jid });
  }

}
