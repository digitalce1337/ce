import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  public title: string;

  public companyName: string;
  public companyAdd: string;
  public email: string;
  public phone_no: string;
  public language: string;

  public result: any;
  public userinfo: any;

  public Uname: any;
  public Udob: any;
  public Uemail: any;
  public uimg: any;
  public Ucompany: any;
  public Ucompanyadd: any;
  public Unum: any;

  profile: any;

  private access_token: string;
  loading: any;

  public toggle;
  public Role: boolean;

  constructor(public navCtrl: NavController, public activeRoute: ActivatedRoute, public storage: Storage, public appprov: AppService,
    public event: Events, public _translate: TranslateService, public authService: AuthService) { }

  ngOnInit() {
    this.storage.ready().then(() => {
      console.log("Storage ready passed");
      this.storage.get('access_token').then((val) => {
        console.log("Storage get passed");
        console.log("Value: " + val + " AT: " + this.access_token);
        this.access_token = val;
        console.log("Set AT, check: " + this.access_token);
        this._translateLanguage();
        this.getUserInfo();
      })
    });

    //get value for toggle value & user role
    this.event.subscribe('toggleValue', (value) => {
      console.log("toggleValue: " + value);
      this.toggle = value;
    });
    this.event.subscribe('role', (res) => {
      console.log("role value: " + res);
      this.Role = res;
    });
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    // this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("profile.title");
    this.companyName = this._translate.instant("profile.companyName");
    this.companyAdd = this._translate.instant("profile.companyAdd");
    this.email = this._translate.instant("profile.email");
    this.phone_no = this._translate.instant("profile.phone_no");

  }

  popToHome() {
    console.log("poptoHome this.toggled:" + this.toggle);
    console.log("poptoHome this.Role:" + this.Role);
    // console.log("Give result: "+ this.Role);

    if (this.Role == true && this.toggle == false) {
      // if(this.toggle == false) { 
      // this.navCtrl.push(TabsPage);
      this.navCtrl.navigateBack(['owner/tabs/owner-home']);
    }
    else if (this.Role == true && this.toggle == true) {
      // else if(this.toggle == true) {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }

    else {
      // this.navCtrl.push(OperatorstabsPage);
      this.navCtrl.navigateBack(['operator/tabs/operator-home']);
    }
  }

  getUserInfo() {
    this.authService.getUserinfo(this.access_token).then((result) => {
      this.userinfo = result;
      // this.userinfo = JSON.parse(this.userinfo._body);
      this.Uemail = this.userinfo.email;
      this.Udob = this.userinfo.dob;
      this.Uname = this.userinfo.name;
      this.uimg = this.userinfo.profile_image_url;
      this.Ucompany = this.userinfo.company_name;
      this.Ucompanyadd = this.userinfo.company_add;
      this.Unum = this.userinfo.phone_no;
      this.appprov.setemail(this.userinfo.email);
    }, (err) => {
      console.log(err);
    });
  }

}
