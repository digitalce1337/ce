import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FleetInfoPage } from '../fleet-info/fleet-info';
import {AddvehiclePage } from '../addvehicle/addvehicle';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-Fleets',
  templateUrl: 'fleets.html'
})
export class FleetsPage {

  public language: string;
  public title: string; 
  public add: string;

  vehicles: Array<{
    serialno: string,
    Modelno: string, 
    pdate:string,
    Desc: string, 
    vtype:string,
    manu:string,
    img: string}>;

  serial: string [];
  Models: string[];
  PurchaseD:string[];
  Descs: string[];
  vehtype:string[];
  manufacturer:string[];
  imgs: string[];
  UsrEmail:any;
  fleets: any;

  private access_token: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public appprov: AppProvider,
    public _translate: TranslateService) {
      storage.ready().then(() => {
      });
      storage.get('access_token').then((val) => {
        if (val == null){
          console.log("No acccess token");
          this.navCtrl.setRoot(LoginPage);
        }
        else{
          console.log("Got access token");
          this.access_token = val.toString();
          this.getFleetin();
          this._initializeTranslation();
        }
      });
  }

  ionViewDidEnter() {
    this._initializeTranslation();     
  }

  public changeLanguage(): void{
    this._translateLanguage();
  }
   
  private _translateLanguage() : void{
    this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.title =  this._translate.instant("fleets.title");
      this.add =  this._translate.instant("fleets.add");
  }


  ionViewWillEnter(){
    this.getFleetin();
  }

  AddVeh(){
    this.navCtrl.push(AddvehiclePage);
  }

  itemTapped(event, item) {
    this.navCtrl.push(FleetInfoPage, {
      item: item
    });
  }

  getFleets(emailin){
    this.appprov.GetFleet(emailin).then((res) => {
      this.fleets = res;
      this.serial = this.fleets.serialno;
      this.Models = this.fleets.modelno;
      this.PurchaseD = this.fleets.pdate;
      this.Descs = this.fleets.desc;
      this.vehtype = this.fleets.Vtype;
      this.manufacturer = this.fleets.Manu;
      this.imgs = this.fleets.img;
      this.vehicles = [];
      for(let i = 0; i < this.imgs.length; i++) {
        this.vehicles.push({
          serialno: this.serial[i],
          Modelno: this.Models[i], 
          pdate:this.PurchaseD[i],
          Desc: this.Descs[i], 
          vtype:this.vehtype[i],
          manu:this.manufacturer[i],
          img: this.imgs[i]
        });
      }
    },(err) =>{
      console.log('error');
    })
  }

  getFleetin(){
    this.appprov.getemail().then((res) => {
      this.UsrEmail = res;
      this.getFleets(res);
    }, err =>{
      console.log(err);
    });
  }

}
