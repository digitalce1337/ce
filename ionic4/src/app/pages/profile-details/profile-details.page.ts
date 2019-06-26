import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {

  public toggled;

  constructor(public navCtrl: NavController, public activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      this.toggled = params["toggled"];
      console.log("toggle status: " + this.toggled);
    });
   }

  ngOnInit() {
    this.popToHome();
  }

  popToHome(){
    // if(this.Role == 1 && this.toggled == true) {
    //   this.navCtrl.push(OperatorstabsPage);  
    // }
    // else if(this.Role ==1 && this.toggled == false) {
    //   this.navCtrl.push(TabsPage)
    // }
    // else {
    //   this.navCtrl.push(OperatorstabsPage);
    // }
    if(this.toggled == false) { 
      // this.navCtrl.push(TabsPage);
      this.navCtrl.navigateBack(['owner/tabs/owner-home']);
    }
    else if(this.toggled == true) {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }

    else {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }
  }

}
