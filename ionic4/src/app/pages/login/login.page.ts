import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, Events, NavController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';


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
  public fbApi : string = '2249231348693264';

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
    public appprov: AppService, public event: Events,public navCtrl: NavController,private _translate: TranslateService) { }

  ngOnInit() {
    this._translateLanguage();    
    this.storage.ready().then(() => {
      this.storage.get('access_token').then((val) => {        
        // this.showLoader();
        if (val !== null) {
          console.log("Got access token");
          this.access_token = val.toString();          
          this.appprov.checkRole(this.access_token).then((res) => {
            console.log("result from checkRole:", res);
            let data = JSON.stringify(res);
            data = JSON.parse(data);            
            console.log("result from checkRole data:", data);
            console.log("result from checkRole data[result]:", data['result']);
            // this.dismissLoader();
            if (data['result'] == "1") {
              //nagivate to owner
              this.roleValue = true;
              this.event.publish('roleReceived', this.roleValue);                          
              this.navCtrl.navigateForward(['owner/tabs/owner-home']);              
                  }
            else if (data['result'] == "0") {
              //navigate to operator
              this.roleValue = false;          
              this.event.publish('roleReceived', this.roleValue);              
              this.navCtrl.navigateForward(['operator/tabs/operator-home']);
              // this.router.navigateByUrl('operator/tabs/operator-home');
            }
            else {
              console.log("Not in database");
            }
          }, err => {
            console.log(err);
          });
        }        
      });
    });



  }
  
  private _translateLanguage(): void {
    this._translate.setDefaultLang('en');
    this.language ='en';
    this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("login.title");
    this.owner = this._translate.instant("login.owner");
    this.operator = this._translate.instant("login.operator");
    this.rolemsgtitle = this._translate.instant("login.rolemsgtitle");
    this.rolemsg = this._translate.instant("login.rolemsg");
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  showRole(){
    console.log("Button selected: "+this.Role);
  }

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
    await alert.present();
  }

  deleteFBCookie(name){    
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  loginWithFacebook1() {
    // this.fb.logout().then(res => {
    //   this.deleteFBCookie("fblo_" + this.fbApi);  

    // this._translate.setDefaultLang('en');
    console.log("Check if cached exists : "+this.Role);
    if (this.Role == null || this.Role === undefined) {      
      this.roleAlert();
      console.log("Display undefined Role: "+ this.Role);
      return;
    }
    console.log("Specified Role equals: "+ this.Role);
    console.log("Starting FBloginStatus");
    //using cache, access straight to the page. Check for the access_token whether belongs to owner/ operator
    //Direct to correct place
    this.fb.getLoginStatus().then((res)=>{
      console.log("Connected display FBgetLoginStatus: "+res.status);

      if (res.status === 'connected'){
        console.log("From FB login cache status 1: "+res.authResponse.accessToken);
        this.access_token = res.authResponse.accessToken;
        this.storage.set('access_token', this.access_token);
        let navigationExtras: NavigationExtras = {
          queryParams: {
            token: this.access_token,
        }}; 
        //checkingExistingUser(accesstoken) -> if true allow pass, else use fb login
        console.log("Selected Role: " + this.Role);
        if (this.Role == 'Owner') {
          this.roleValue = true;
          this.event.publish('roleReceived', this.roleValue);
          this.navCtrl.navigateForward(['owner/tabs/owner-home'], navigationExtras);                    
        } else {
          this.roleValue = false;          
          this.event.publish('roleReceived', this.roleValue);              
          this.navCtrl.navigateForward(['operator/tabs/operator-home'], navigationExtras);                    
        }
        
        // this.appprov.getEmail(this.access_token).then((res) => {
        //   let checkUserCookie = JSON.stringify(res);
        //   checkUserCookie = JSON.parse(checkUserCookie);
        //   checkUserCookie = checkUserCookie['email'].toString();
        //   console.log("Result from checkUser:",checkUserCookie);
        //   console.log("Selected Role: "+ this.Role);
        //   if (checkUserCookie == 'false') {
        //     if (this.Role == 'Owner') {
        //       this.roleValue = true;
        //       this.event.publish('roleReceived', this.roleValue);
        //       this.navCtrl.navigateForward(['owner/tabs/owner-home'], navigationExtras);                    
        //     } else {
        //       this.roleValue = false;          
        //       this.event.publish('roleReceived', this.roleValue);              
        //       this.navCtrl.navigateForward(['operator/tabs/operator-home'], navigationExtras);                    
        //     }
        //   }
        //   else {
        //     console.log("Need to deleteFB cookie access")
        //     this.fb.logout().then(res => {
        //       this.deleteFBCookie("fblo_" + this.fbApi);  
        //     // });
        //     this.showLoader();
        //     this.fb.login(['public_profile', 'user_friends', 'email']).then(res => {
        //       this.dismissLoader();
        //       console.log("FB login success after deleteFB cookie")
        //       console.log("Start dismissLoader: Checkpoint 1");
              
        //       // this.loading.dismiss();     
        //     console.log("Deleted fb cookie access");
        //     this.access_token = res.authResponse.accessToken;
        //     this.fb.api('/me?fields=id,name,email,picture,first_name,last_name,gender,location,locale,work,languages,birthday,relationship_status,hometown', []).then(
        //       profile => {
        //         const email = profile.email;                
        //         const profile_url = 'assets/imgs/blank_profile.png';
        //         const name = profile.name;
        //         console.log("New user need to handle... checkUser != false")
        //         this.dismissLoader();                        
        //         this.appprov.addUser(email, this.access_token, name, profile_url, this.Role).then((res) => {
        //           let adduser = JSON.stringify(res);
        //           adduser = JSON.parse(adduser);                          
        //           console.log("Going to set access_token into storage: "+this.access_token);
        //           this.storage.set('access_token', this.access_token);
        //           this.isLoggedIn = true;
        //           if (this.Role === 'Owner') {
        //             this.router.navigateByUrl('create-company');                          
        //           } else {
        //             this.router.navigateByUrl('otp-operator');                        
        //           }
        //         }, err => { console.log(err); });
        //         }, err => { console.log(err); });
        //       },err => { console.log(err); });
        //       });
        //       }
        //     }, err => { console.log(err); });        
        // console.log("Selected Role: "+ this.Role);
        // if (this.Role == 'Owner') {
        //   this.roleValue = true;
        //   this.event.publish('roleReceived', this.roleValue);
        //   this.navCtrl.navigateForward(['owner/tabs/owner-home'], navigationExtras);                    
        // } else {
        //   this.roleValue = false;          
        //   this.event.publish('roleReceived', this.roleValue);
        //   // console.log("show me "+this.Role + " storage: " + this.storage);
        //   this.navCtrl.navigateForward(['operator/tabs/operator-home'], navigationExtras);                    
        // }
      }      
      //Unknown facebook login status
        else{           
          //No fblogin status
          console.log("Start showLoader: Checkpoint 0");
          this.showLoader();
          //Need to include check login status here, use auth credentials if exist
          this.fb.login(['public_profile', 'user_friends', 'email']).then(res => {
            console.log("Start dismissLoader: Checkpoint 1");
            this.dismissLoader();
            // this.loading.dismiss();
            if (res.status === 'connected') {              
              console.log("FB connected passed: Checkpoint 2")
              this.access_token = res.authResponse.accessToken;              
              console.log("Retrieved access_token from FB authRes: "+this.access_token);        
              console.log("USER was connected to Facebook")      
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
                      console.log("Result from checkUser:",checkUser);

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
                            this.navCtrl.navigateForward(['owner/tabs/owner-home'], navigationExtras);                                                        
                          } else {
                            this.roleValue = false;
                            this.event.publish('roleReceived', this.roleValue);                            
                            this.navCtrl.navigateForward(['operator/tabs/operator-home'], navigationExtras);                                                        
                          }
                        }, err => { console.log(err); });
                      } 
                      else {
                        console.log("New user need to handle... checkUser != false")
                        this.dismissLoader();                        
                        this.appprov.addUser(email, this.access_token, name, profile_url, this.Role).then((res) => {
                          let adduser = JSON.stringify(res);
                          adduser = JSON.parse(adduser);                          
                          console.log("Going to set access_token into storage: "+this.access_token);
                          this.storage.set('access_token', this.access_token);
                        this.isLoggedIn = true;
                        if (this.Role === 'Owner') {
                          this.router.navigateByUrl('create-company');                          
                        } else {
                          this.router.navigateByUrl('otp-operator');                        
                        }
                        }, err => { console.log(err); });
                      }
                    }, err => {
                      console.log(err);
                    });

                    //Everything else
                    // console.log("Going to set access_token into storage: "+this.access_token);
                    // this.storage.set('access_token', this.access_token);
                    // this.isLoggedIn = true;
                    // if (this.Role === 'Owner') {
                    //   this.router.navigateByUrl('create-company');
                    //   // this.navCtrl.navigateForward('/CreatecompanyPage', this.storage);
                    //   // this.nav.push(CreatecompanyPage, this.storage);
                    // } else {
                    //   this.router.navigateByUrl('otp-operator');
                    //   // this.nav.push(OtpOperatorPage, this.storage);
                    // }
                    // return;
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
    // )}
  )}
}
    