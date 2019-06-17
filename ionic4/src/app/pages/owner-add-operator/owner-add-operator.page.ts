import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-owner-add-operator',
  templateUrl: './owner-add-operator.page.html',
  styleUrls: ['./owner-add-operator.page.scss'],
})
export class OwnerAddOperatorPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  itemTappedAdd() {
    console.log("going backkkkkkk");
    this.navCtrl.navigateBack('/owner/tabs/owner-operators');
  }

}
