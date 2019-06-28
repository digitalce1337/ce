import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/apikey/api.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { ViewController } from '@ionic/core';
import { PopoverController, Events } from '@ionic/angular';


@Component({
  selector: 'app-operator-cap-skills',
  templateUrl: './operator-cap-skills.page.html',
  styleUrls: ['./operator-cap-skills.page.scss'],
})
export class OperatorCapSkillsPage implements OnInit {

  public language: string;
  public skill_sets: string;
  public submit: string;

  vehicles: Array<{
    vehicle_url: string,
    vehicle_type: string,
    checked: boolean
  }>;
  access_token: string;

  capabilities: any[];
  capability: any[];

  vehurl;
  vehtype;
  status;

  constructor(public storage: Storage, public api: ApiService, public _translate: TranslateService, public appprov: AppService,
    public popover: PopoverController, public event: Events) { 
      this.vehurl = [this.api.apiKey + 'static/vehicles/compactor.png',
      this.api.apiKey + 'static/vehicles/Excavator.png',
      this.api.apiKey + 'static/vehicles/loader.png',
      this.api.apiKey + 'static/vehicles/truck.png'];
      console.log("this.vehurl: " + this.vehurl);
      this.vehtype = ['Compactor', 'Excavator', 'Loader', 'Truck'];
      // this.status = [true,true,true,true];
      this.status = [false,false,false,false];
    }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('access_token').then((val) => {
        console.log("Got access token");
        this.access_token = val;
        this.vehicles = [];
        this.capabilities = [];
        for (let i = 0; i < this.vehurl.length; i++) {
          this.vehicles.push({
            vehicle_url: this.vehurl[i],
            vehicle_type: this.vehtype[i],
            checked: this.status[i]
          })
          console.log("this.veh: " + this.vehicles);
        }
        console.log("this.capabilities: " + JSON.stringify(this.capabilities));
        this._translateLanguage();
        this.UpdateCap();
      })
    })
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    // this._translate.use(this.language);
    this._initializeTranslation();
  }

  private _initializeTranslation(): void {
    this.skill_sets = this._translate.instant("operatorhome.skill_sets");
    this.submit = this._translate.instant("opjobdetails.submit");
  }

  UpdateCap() {
    console.log("updatecap token: "+this.access_token);
    console.log("updatecap cap:"+this.capabilities.toString());

    this.appprov.UpdateCapabilities(this.access_token, this.capabilities.toString()).then((res) => {
      // this.appprov.presentAlert('Success!', 'Skillsets successfully updated!');
      // this.close();
      console.log("Sucess skillset updated");
    });
    this.getCapabilities();
    // this.close();
  }

  selectVehicle(data) {
    console.log("selectVeh data: " + JSON.stringify(data));
    console.log("selectVeh data: " + JSON.stringify(data.checked));
    if (!data.checked == true) {
      if (!(this.capabilities.indexOf(data.vehicle_type) > -1)) {
        this.capabilities.push(data.vehicle_type);
        console.log("selectVeh push: " + this.capabilities);
      }
    } else {
      if (this.capabilities.indexOf(data.vehicle_type) > -1) {
        var index = this.capabilities.indexOf(data.vehicle_type, 0);
        this.capabilities.splice(index, 1);
      }
    }
    console.log(this.capabilities.toString());
  }



  getCapabilities(){
    this.capability = [];
    console.log("inside getCapabilities");
    // this.appprov.getOpCapabilities(this.access_token.toString()).then((res:any) => {
    this.appprov.getOpCapabilities(this.access_token).then((res:any) => {
      let caps = JSON.stringify(res);
      console.log("getCap res: " + res);
      console.log("getCap cap: " + caps);
      caps = JSON.parse(caps);
      let urls = caps['vehicle_url'];
      let types = caps['vehicle_type'];
      for(let i = 0; i<urls.length;i++){
        this.capability.push({
          vehicle_url:urls[i],
          vehicle_type: types[i]
        })
      }
      // this.appprov.presentAlert('Success!', 'Skillsets successfully updated!');
    });
    
    // this.UpdateCap();
    this.close();
  }

  close() {
    this.appprov.presentAlert('Success!', 'Skillsets successfully updated!');
    this.popover.dismiss();
  }

}
