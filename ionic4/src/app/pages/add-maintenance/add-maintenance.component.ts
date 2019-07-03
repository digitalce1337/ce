import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.scss'],
})
export class AddMaintenanceComponent implements OnInit {

  public language: string;
  public title: string;
  public start_date: string;
  public end_date: string;
  public location: string;
  public description: string;
  public add: string;
  public cancel: string;

  serial;
  model;

  private access_token: string;

  //Zul account
  // public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';  
  //Jem account
  // private access_token:string ='EAAf9qfuOeRABAMaaCS2IHAYrmREB2QCQoT2zvTQMwHWJrcisIZBXNkxhFn3nlWyPgZAJD6ZBtzo3KkTZAxjAZBQRyWYadKuctjN73pcYgJVsXTAAlGdRD0mQjPORpotRPZAUts2Q01sZCN58mlc6PO203JAR9TFwiYDDAq2jbymXkONFZBqRqrj3CSDN9x9mAMB5dZATjWSYzVj5Bw1me25biYNZA4NPiaZC0wut7IQWv21XgZDZD';

  vehInfo: any;
  Fromdatetime: any;
  Todatetime: any;
  LocationField: any;
  DescriptionField: any;

  constructor(public _translate: TranslateService, public appprov: AppService, public modalCtrl: ModalController,
    public popoverCtrl: PopoverController, public storage: Storage) { }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('access_token').then((val) => {
        this.access_token = val;
        this._translateLanguage();
        console.log('ionViewDidLoad AddMaintenancePage');
        console.log("addMaintenance serial no: " + this.serial);
        console.log("addMaintenance model no: " + this.model);
      })
    });
  }
  //   console.log('ionViewDidLoad AddMaintenancePage');
  //   console.log("addMaintenance serial no: " + this.serial);
  //   console.log("addMaintenance model no: " + this.model);
  //   this._initializeTranslation();
  // }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    // this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.title = this._translate.instant("add-maintenance.title");
    this.start_date = this._translate.instant("add-maintenance.start_date");
    this.end_date = this._translate.instant("add-maintenance.end_date");
    this.location = this._translate.instant("add-maintenance.location");
    this.description = this._translate.instant("add-maintenance.description");
    this.add = this._translate.instant("add-maintenance.add");
    this.cancel = this._translate.instant("add-maintenance.cancel");
  }

  addMaintenance() {
    let date_from = this.Fromdatetime.substring(0, 10);
    let date_to = this.Todatetime.substring(0, 10);
    let location = this.LocationField;
    let desc = this.DescriptionField;
    let serial_no = this.serial;
    let modelnum = this.model;
    console.log("date from: " + date_from + " date to: " + date_to);
    console.log("location: " + location + " desc: " + desc);
    this.appprov.addMaintenance(this.access_token, serial_no, date_from, date_to, location, desc, modelnum).then((res) => {
      console.log("appprov res: " + res);
      let data = JSON.stringify(res);
      console.log("appprov stringify: " + data);
      data = JSON.parse(data);
      console.log("appprov parse: " + data);
    }, err => {
      console.log(err);
    });
    this.close();
  }

  close() {
    // this.viewctrl.dismiss();
    // this.modalCtrl.dismiss();
    this.popoverCtrl.dismiss();
  }

}
