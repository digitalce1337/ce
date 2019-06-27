import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, Events, NavController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Role;
  public language: string;
  public title: string;
  public owner: string;
  public operator: string;
  public rolemsgtitle: string;
  public rolemsg: string;

  @ViewChild('email') email;
  @ViewChild('password') password;

  Role: string;
  loading: any;
  access_token: string;
  isLoggedIn = false;
  roleValue: boolean;

  provider = {
    loggedin: false,
    name: '',
    email: '',
    profilePicture: ''
  };

  constructor(public router: Router, public storage: Storage, public alertCtrl: AlertController,
    private fb: Facebook, public loadingCtrl: LoadingController, 
    public appprov: AppService, public event: Events,public navCtrl: NavController) { }

  ngOnInit() {
  }

  showRole(){
    console.log("Button selected: "+this.Role);
  }

  // role(value) {
  //   this.Role = value;
  //   console.log("role is: " + ""+value);
  //   console.log("role is: " + ""+this.Role);
  //   console.log("role is: " + String(value));
  // }

  testLogin(){
    console.log("Clicked on Login");
    if(this.Role == 'Owner') {
      console.log("User Role:"+ this.Role);
      this.router.navigateByUrl('owner/tabs/owner-home');     
    }
    else {
      console.log("User Role:"+ this.Role);
      this.router.navigateByUrl('operator/tabs/operator-home');
    }
  }

  async showLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await this.loading.present();
  }

  async dismissLoader() {    
    setTimeout(()=>{
      this.loading.dismiss();
    },2000);
  //   await this.loading.dismiss();
  }


  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Info',
      subHeader: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async roleAlert() {
    const alert = await this.alertCtrl.create({
      header: this.rolemsgtitle,
      subHeader: this.rolemsg,
      buttons: ['OK']
    });
    // }).then(alert => alert.present());
    await alert.present();
  }

  loginWithFacebook1() {
    console.log("Check if role was cached: "+this.Role);
    if (this.Role == null || this.Role === undefined) {      
      this.roleAlert();
      console.log("Display Role: "+ this.Role);
      return;
    }
    console.log("Display Role: "+ this.Role);
    console.log("Starting FBloginStatus");
    //using cache, access straight to the page. Check for the access_token whether belongs to owner/ operator
    //Direct to correct place
    this.fb.getLoginStatus().then((res)=>{
      console.log("FBgetLoginStatus: "+res.status);
      if (res.status === 'connected'){
        console.log("From FB login cache status 1: "+res.authResponse.accessToken);
        var acT = res.authResponse.accessToken;
        // console.log("From FB login cache status 2: "+res.accessToken);
        console.log("From FB login cache status 3: "+res.authResponse.userID);
        //Direct to cached location
        // console.log("Variable aCT:" + acT);
        this.access_token = res.authResponse.accessToken;
        this.storage.set('access_token', this.access_token);
        let navigationExtras: NavigationExtras = {
          queryParams: {
            token: this.access_token,
        }};
        console.log("Selected Role: "+ this.Role);
        if (this.Role == 'Owner') {
          this.roleValue = true;
          this.event.publish('roleReceived', this.roleValue);
          this.navCtrl.navigateForward(['owner/tabs/owner-home'], navigationExtras);          
          // console.log("clicked" + "storage: " + this.storage);
          // return;
        } else {
          this.roleValue = false;          
          this.event.publish('roleReceived', this.roleValue);
          console.log("show me "+this.Role + " storage: " + this.storage);
          this.navCtrl.navigateForward(['operator/tabs/operator-home'], navigationExtras);          
          // return;
        }
      }
        else
        {
            console.log("Going to else: "+res.status);
      //     }
      // })
        
    // if role
    console.log("Going to showLoader: Checkpoint 0");
    this.showLoader();
    //Need to include check login status here, use auth credentials if exist
    this.fb.login(['public_profile', 'user_friends', 'email']).then(res => {
      console.log("Going to dismiss: Checkpoint 1");
      this.dismissLoader();
      // this.loading.dismiss();
      if (res.status === 'connected') {
        // this.showAlert(res.authResponse.userID + ": " + res.authResponse.accessToken);
        console.log("Dismiss passed: Checkpoint 2")
        this.access_token = res.authResponse.accessToken;
        const userID = res.authResponse.userID;
        console.log("Retrieved access_token from authRes: "+this.access_token);
        console.log("Retrieved userID from authRes: "+ userID);

        this.fb.api('/me?fields=id,name,email,picture,first_name,last_name,gender,location,locale,work,languages,birthday,relationship_status,hometown', []).then(
          profile => {
            const email = profile.email;
            // Get profile picture from url
            // let profile_url = profile['picture']['data']['url'];
            // Set profile_url as empty default
            const profile_url = 'assets/imgs/blank_profile.png';
            const name = profile.name;

            if (email != null && email !== '') {
              this.dismissLoader();
              // this.loading.dismiss();
              console.log('User is logged in either by new access_token or revisit user');
              this.appprov.checkExistingUser(email).then((res) => {
                let checkUser = JSON.stringify(res);
                checkUser = JSON.parse(checkUser);
                checkUser = checkUser['result'].toString();
                console.log(checkUser);

                if (checkUser === 'false') {
                  this.appprov.updateAccessToken(email, this.access_token, profile_url).then((res) => {
                    let update = JSON.stringify(res);
                    update = JSON.parse(update);
                    console.log(update);
                    console.log("Going to set access_token into storage: "+this.access_token);
                    this.storage.set('access_token', this.access_token);
                    let navigationExtras: NavigationExtras = {
                      queryParams: {
                          token: this.access_token
                      }
                    };
                    if (this.Role == 'Owner') {
                      this.roleValue = true;
                      this.event.publish('roleReceived', this.roleValue);
                      // this.nav.setRoot(TabsPage);
                      this.navCtrl.navigateForward(['owner/tabs/owner-home'], navigationExtras);
                      // this.router.navigateByUrl('owner/tabs/owner-home', navigationExtras);
                      console.log("clicked" + "storage: " + this.storage);
                      return;
                    } else {
                      this.roleValue = false;
                      this.event.publish('roleReceived', this.roleValue);
                      // this.nav.setRoot(OperatorstabsPage, this.storage);
                      console.log("show me "+this.Role + " storage: " + this.storage);
                      this.navCtrl.navigateForward(['operator/tabs/operator-home'], navigationExtras);
                      // this.router.navigateByUrl('operator/tabs/operator-home',navigationExtras);
                      return;
                    }
                  }, err => { console.log(err); });
                } else {
                  this.dismissLoader();
                  // this.loading.dismiss();
                  this.appprov.addUser(email, this.access_token, name, profile_url, this.Role).then((res) => {
                    let adduser = JSON.stringify(res);
                    adduser = JSON.parse(adduser);
                    // console.log(adduser['result']);
                  }, err => { console.log(err); });
                }
              }, err => {
                console.log(err);
              });
              console.log("Going to set access_token into storage: "+this.access_token);
              this.storage.set('access_token', this.access_token);
              this.isLoggedIn = true;

              if (this.Role === 'Owner') {
                this.router.navigateByUrl('create-company');
                // this.navCtrl.navigateForward('/CreatecompanyPage', this.storage);
                // this.nav.push(CreatecompanyPage, this.storage);
              } else {
                this.router.navigateByUrl('OtpOperatorPage');
                // this.nav.push(OtpOperatorPage, this.storage);
              }
              return;
            }
          }
        );
      } else {
        this.isLoggedIn = false;
        this.showAlert(res.status);
      }
    }).catch(e => {
      console.log('Error logging into Facebook', e);
      console.log('Display value for isLoggedIn', this.isLoggedIn);
    });
    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    this.dismissLoader();
    // this.loading.dismiss();
  }}

  //remove to avoid being in loop
    )}}
    