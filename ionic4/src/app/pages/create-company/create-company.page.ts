import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, NavController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})
export class CreateCompanyPage implements OnInit {

  public language: string;
  public title: string;
  public company_name: string;
  public company_address: string;
  public phone_no: string;
  public working_days: string = '30';
  public continue: string;

  private access_token: string;
  companynameField: string = "";
  companyaddField: string = "";
  phonenoField: string = "";
  workingdaysField: string = "30";


  constructor(public _translate: TranslateService, public alertCtrl: AlertController, public storage: Storage,
    public appprov: AppService, public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.storage.ready().then(() => {
      console.log("Storage ready passed");
      this.storage.get('access_token').then((val) => {
        console.log("Storage get passed");
        console.log("Value: " + val + " AT: " + this.access_token);
        this.access_token = val;
        console.log("Set AT, check: " + this.access_token);
        this._translateLanguage();      
      })
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
    this.title = this._translate.instant("createcompany.title");
    this.company_name = this._translate.instant("createcompany.company_name");
    this.company_address = this._translate.instant("createcompany.company_address");
    this.phone_no = this._translate.instant("createcompany.phone_no");
    this.working_days = this._translate.instant("createcompany.working_days");
    this.continue = this._translate.instant("createcompany.continue");
  }

  async emptyAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Empty Field(s)',
      subHeader: 'Please fill up all details before proceeding',
      buttons: ['OK']
    });
    await alert.present();
  }

  itemTappedAdd() {
    // this.navCtrl.setRoot(TabsPage);
    let company_name = this.companynameField;
    let company_add = this.companyaddField;
    let phone_no = this.phonenoField;
    let working_days = this.workingdaysField;

    // if (company_name == "" || company_add == "" || phone_no == "" || working_days == "") {
    if (company_name == "" || company_add == "" || phone_no == "") {
      this.emptyAlert();
      return;
    }

    this.appprov.addCompany(this.access_token, company_name, company_add, phone_no, working_days).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      if (data['result'].toString() == 'true') {
        console.log("Company and phone number added");
      }
      // this.nav.setRoot(TabsPage);
      this.router.navigateByUrl('owner/tabs/owner-home');


    }, err => {
      console.log(err);
    });
    //this.navCtrl.setRoot(TabsPage);

  }

}
