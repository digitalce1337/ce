import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-owner-fleet',
  templateUrl: './owner-fleet.page.html',
  styleUrls: ['./owner-fleet.page.scss'],
})
export class OwnerFleetPage implements OnInit {

  public language: string;
  public title: string; 
  public add: string;

  // item_v:any;

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


  constructor(public route: Router, public navCtrl: NavController, public _translate: TranslateService,
    public appprov: AppService) { }

  ngOnInit() {
    this._initializeTranslation(); 
    this.getFleetin();
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


  AddVeh(){
    // this.nav.push(AddvehiclePage);
    // this.navCtrl.navigateForward('/OwnerAddVehiclePage');
    this.navCtrl.navigateForward('/owner-add-vehicle');
    // this.route.navigateByUrl('OwnerAddVehiclePage');
  }

  // itemTapped(event, item) {
  
  itemTapped() {
    console.log("here itemtapped");
    this.route.navigateByUrl('owner-fleet-info');
    console.log("moving to fleet info");
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

  itemTapped1(event, item_v) {
    // itemTapped() {
      // this.nav.push(FleetInfoPage, {item: item});
      // item_v = this.vehicles;
      console.log("here itemtapped");
      console.log("item_v: " + item_v);
      console.log("item_v: " + item_v.Modelno);
      console.log("item_v: " + item_v.img);
      console.log("item_v: " + item_v.pdate);

      let navigationExtras: NavigationExtras = {
        queryParams: {
          serialno: item_v.serialno,
          Modelno: item_v.Modelno, 
          pdate:item_v.pdate,
          Desc: item_v.Desc, 
          vtype:item_v.vtype,
          manu:item_v.manu,
          img: item_v.img
        }
      };
      console.log("this is item_v: " + navigationExtras);
      // this.route.navigateByUrl('/owner-fleet-info', navigationExtras);
      // this.route.navigateByUrl('owner-fleet-info',navigationExtras);
      // this.navCtrl.navigateForward('/owner-fleet-info');
      this.navCtrl.navigateForward(['owner-fleet-info'], navigationExtras);
      // console.log("moving to fleet info");
  }

}
