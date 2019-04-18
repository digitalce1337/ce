import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the JoblistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joblists',
  templateUrl: 'joblists.html',
})
export class JoblistsPage {
  mode:string;

  public jobs: any [][];
  public data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.mode = navParams.get('mode');
    if(this.mode == "Today"){
      console.log("This is today tab");    
      // this.data = [
      //   {name: 'Sambo E&C', location:'Seoul', payout: '1m', opvehcost: [
      //     {opname: 'Dr Strange', vehtype: 'custom-shovel', oppay: '7000', opimg:'../assets/imgs/strange.jpeg'},
      //     {opname: 'Deadpool', vehtype: 'custom-shovel', oppay: '8000', opimg:'../assets/imgs/deadpool.jpeg'}
      //   ]
      //   },
      //   {name: 'Chye Joo', location:'Busan', payout: '1.4m', opvehcost: [
      //     {opname: 'Dr Strange', vehtype: 'custom-shovel', oppay: '10000', opimg:'../assets/imgs/strange.jpeg'},
      //     {opname: 'Dr Strange', vehtype: 'custom-excavator', oppay: '20000', opimg:'../assets/imgs/strange.jpeg'}
      //   ]
      //   },
      //   {name: 'Hup Tiong', location:'Chun Cheon', payout: '1.8m', opvehcost: [
      //     {opname: 'Deadpool', vehtype: 'custom-shovel', oppay: '10000', opimg:'../assets/imgs/deadpool.jpeg'},
      //     {opname: 'Deadpool', vehtype: 'custom-excavator', oppay: '20000', opimg:'../assets/imgs/deadpool.jpeg'},
      //     {opname: 'Dr Strange', vehtype: 'custom-dozer', oppay: '3000', opimg:'../assets/imgs/strange.jpeg'}
      //   ]
      //   }
      // ];
    }
    else if (this.mode == 'History'){
      console.log("this is history tab");
    }
    else{
       console.log("this is upcoming tab");
    }

    // let res = this.data.map(function (obj){
    //   return Object.keys(obj).map(function (key){
    //     return obj[key];
    //   });
    // });

    // this.jobs = res;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoblistsPage');
  }

  itemTapped(event, item) {
    const Modal = this.modalCtrl.create("JobinfoPage",{jobdata: item},{showBackdrop: true, enableBackdropDismiss: true});
    Modal.present();
  }



}
