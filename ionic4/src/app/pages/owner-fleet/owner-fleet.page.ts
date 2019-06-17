import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-owner-fleet',
  templateUrl: './owner-fleet.page.html',
  styleUrls: ['./owner-fleet.page.scss'],
})
export class OwnerFleetPage implements OnInit {

  constructor(public route: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  AddVeh(){
    // this.nav.push(AddvehiclePage);
    // this.navCtrl.navigateForward('/OwnerAddVehiclePage');
    this.navCtrl.navigateForward('/owner-add-vehicle');
    // this.route.navigateByUrl('OwnerAddVehiclePage');
  }
}
