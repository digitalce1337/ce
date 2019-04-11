import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Tab } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';
import { AppProvider } from '../../providers/app/app';
import { TranslateService } from '@ngx-translate/core';
import { BasePage } from '../base-page/basepage';

/**
 * Generated class for the CreatecompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createcompany',
  templateUrl: 'createcompany.html',
})
export class CreatecompanyPage extends BasePage {

  public language: string;
  public title: string;
  public company_name: string;
  public company_address: string;
  public phone_no: string;
  public working_days: string;
  public continue: string;

  // private access_token: string;
  companynameField: string = "";
  companyaddField: string = "";
  phonenoField: string = "";
  workingdaysField: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appprov: AppProvider,
    private alertCtrl: AlertController,
    private storage: Storage,
    public _translate: TranslateService) {

    super(appprov);
    storage.ready().then(() => {
    });
    // storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q').then(() =>{
    //   console.log("access_token set");     
    //   storage.get('access_token').then((val) => {
    //     if (val == null){
    //       console.log(this.access_token);
    //       console.log("No acccess token");
    //       //this.navCtrl.setRoot(LoginPage);
    //     }
    //     else{
    //       console.log("Got access token");
    //       this.access_token = val.toString(); 
    //       console.log(this.access_token);
    //       //this.navCtrl.setRoot(TabsPage);
    //     }
    //   });
    // });
    storage.get('access_token').then((val) => {
      if (val == null) {
        console.log(this.access_token);
        console.log("No acccess token");
        //this.navCtrl.setRoot(LoginPage);
      }
      else {
        console.log("Got access token");
        this.access_token = val.toString();
        this._initializeTranslation();
      }
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CreatecompanyPage');
    this._initializeTranslation();
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("createcompany.title");
    this.company_name = this._translate.instant("createcompany.company_name");
    this.company_address = this._translate.instant("createcompany.company_address");
    this.phone_no = this._translate.instant("createcompany.phone_no");
    this.working_days = this._translate.instant("createcompany.working_days");
    this.continue = this._translate.instant("createcompany.continue");
  }


  itemTappedAdd() {
    // this.navCtrl.setRoot(TabsPage);
    let company_name = this.companynameField;
    let company_add = this.companyaddField;
    let phone_no = this.phonenoField;
    let working_days = this.workingdaysField;

    if (company_name == "" || company_add == "" || phone_no == "" || working_days == "") {
      let alert = this.alertCtrl.create({
        title: 'Empty Field(s)',
        subTitle: 'Please fill up all details before proceeding',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.appprov.addCompany(this.access_token, company_name, company_add, phone_no, working_days).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      if (data['result'].toString() == 'true') {
        console.log("Company and phone number added");
      }
      this.navCtrl.setRoot(TabsPage);

    }, err => {
      console.log(err);
    });
    //this.navCtrl.setRoot(TabsPage);

  }

}
