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
  public Role: boolean;

  constructor(public navCtrl: NavController, public activeRoute: ActivatedRoute,
    public event: Events) {}

  ngOnInit() {
    this.event.subscribe('toggleValue', (value) => {
      console.log("toggleValue: " + value);
      this.toggle = value;
    });
    this.event.subscribe('role', (res) => {
      console.log("role value: " + res);
      this.Role = res;
    });
    // this.popToHome();
  }

  popToHome(){
    console.log("poptoHome this.toggled:" + this.toggle);
    console.log("poptoHome this.Role:" + this.Role);
    // console.log("Give result: "+ this.Role);

    if(this.Role == true && this.toggle == false) { 
    // if(this.toggle == false) { 
      // this.navCtrl.push(TabsPage);
      this.navCtrl.navigateBack(['owner/tabs/owner-home']);
    }
    else if(this.Role == true && this.toggle == true) {
    // else if(this.toggle == true) {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }

    else {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }
  }

}
