import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';
import { BasePage } from '../base-page/basepage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage{

  // constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  register() {
    // this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(res => {
    //   console.log('got data', res);
    //   this.showAlert('Register success!');
    //   this.navCtrl.push(LoginPage);
    // }).catch(error => {
    //   console.log('got error', error);
    //   this.showAlert(error.message);
    // });
  }

}
