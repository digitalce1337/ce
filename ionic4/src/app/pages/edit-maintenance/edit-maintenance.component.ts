import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-maintenance',
  templateUrl: './edit-maintenance.component.html',
  styleUrls: ['./edit-maintenance.component.scss'],
})
export class EditMaintenanceComponent implements OnInit {

  public language: string;
  public title: string;
  public delete: string;

  serial;

  vehInfo: any;
  maintenances: Array<{
    date_from:string,
    date_to: string, 
    location:string,
    desc:string}>;

  serial_no:string;
  date_from:string[];
  date_to: string[];
  location:string[];
  desc:string[];
  maint: any;

  private access_token: string;
  //Zul account
  // public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';  
  //Jem account
  // private access_token:string ='EAAf9qfuOeRABAMaaCS2IHAYrmREB2QCQoT2zvTQMwHWJrcisIZBXNkxhFn3nlWyPgZAJD6ZBtzo3KkTZAxjAZBQRyWYadKuctjN73pcYgJVsXTAAlGdRD0mQjPORpotRPZAUts2Q01sZCN58mlc6PO203JAR9TFwiYDDAq2jbymXkONFZBqRqrj3CSDN9x9mAMB5dZATjWSYzVj5Bw1me25biYNZA4NPiaZC0wut7IQWv21XgZDZD';

  constructor(public _translate: TranslateService, public appprov: AppService, public modalCtrl: ModalController, 
    public popoverCtrl: PopoverController, public storage: Storage) { }

  ngOnInit() {
    this.storage.ready().then(()=>{      
      this.storage.get('access_token').then((val)=>{        
        this.access_token = val;               
        this._translateLanguage();
        this.retrieveMaintenance(this.serial);            
        console.log("retrieveMaintenance: " + this.serial); 
      })})
  }
  //   this.retrieveMaintenance(this.serial);
  //   // this.retrieveMaintenance(this.vehInfo.serial_no);
  //   // this.serial_no = this.vehInfo.serial_no;
  //   this._initializeTranslation();
  //   console.log("retrieveMaintenance: " + this.serial);
  // }

  public changeLanguage(): void{
    this._translateLanguage();
  }
  
  private _translateLanguage() : void{
    // this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.title =  this._translate.instant("edit-maintenance.title");
      this.delete =  this._translate.instant("edit-maintenance.delete");
  }


  retrieveMaintenance(serial_no){
    this.appprov.retrieveMaintenance(this.access_token, serial_no).then((res) => {
      let data = JSON.stringify(res);
      // data = JSON.parse(data);
      this.maint = res;
      console.log("retrieveMaintenance: " + data);
      console.log("retrieveMaintenance: " + this.maint);
      this.date_from = this.maint.date_from;
      this.date_to = this.maint.date_to;
      this.location = this.maint.location;
      this.desc = this.maint.desc;
      this.maintenances = [];
      for(let i = 0; i < this.date_from.length; i++) {
        this.maintenances.push({
          date_from: this.date_from[i],
          date_to: this.date_to[i], 
          location:this.location[i],
          desc: this.desc[i], 
        });
      }
      console.log("retrieveMaintenance: " + this.maintenances);
      }, err=>{
      console.log(err);
    });
  }

  close(){
    // this.view.dismiss();
    this.modalCtrl.dismiss(this.serial);
    console.log("trying to close modal");
  }

  deleteMaintenance(date_from, date_to, location, desc){
    this.appprov.deleteMaintenance(this.access_token, this.serial_no, date_from, date_to, location, desc).then((res) => {
      let data = JSON.stringify(res);
      // data = JSON.parse(data);
      console.log("data delete maintenance: " + data);
      console.log("record deleted");
      this.retrieveMaintenance(this.serial_no);
      }, err=>{
      console.log(err);
    });
  }
  editMaintenance(date_from, date_to, location, desc){
    console.log("edit showing");
    // this.appprov.deleteMaintenance(this.access_token, this.serial_no, date_from, date_to, location, desc).then((res) => {
    //   let data = JSON.stringify(res);
    //   // data = JSON.parse(data);
    //   console.log("data edit maintenance: " + data);
    //   console.log("record deleted");
    //   this.retrieveMaintenance(this.serial_no);
    //   }, err=>{
    //   console.log(err);
    // });
  }


}
