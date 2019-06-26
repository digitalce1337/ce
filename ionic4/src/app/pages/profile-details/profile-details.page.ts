import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {

  public toggle;

  constructor(public navCtrl: NavController, public activeRoute: ActivatedRoute,
    public event: Events) {}

  ngOnInit() {
    this.event.subscribe('toggleValue', (value) => {
      console.log("toggleValue: " + value);
      this.toggle = value;
    })
    // this.popToHome();
  }

  popToHome(){
    console.log("poptoHome this.toggled:" + this.toggle);
    if(this.toggle == false) { 
      // this.navCtrl.push(TabsPage);
      this.navCtrl.navigateBack(['owner/tabs/owner-home']);
    }
    else if(this.toggle == true) {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }

    else {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }
  }

}
