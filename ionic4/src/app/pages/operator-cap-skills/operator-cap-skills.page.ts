import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/apikey/api.service';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { ViewController } from '@ionic/core';
import { PopoverController } from '@ionic/angular';

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
    vehicle_type: string
  }>;
  access_token: string;

  capabilities: any[];

  constructor(public storage: Storage, public api: ApiService, public _translate: TranslateService, public appprov: AppService,
    public popover: PopoverController) { }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('access_token').then((val) => {
        var vehurl = [this.api.apiKey + 'static/vehicles/compactor.png',
        this.api.apiKey + 'static/vehicles/Excavator.png',
        this.api.apiKey + 'static/vehicles/loader.png',
        this.api.apiKey + 'static/vehicles/truck.png'];
        var vehtype = ['Compactor', 'Excavator', 'Loader', 'Truck'];
        console.log("Got access token");
        this.access_token = val;
        this.vehicles = [];
        this.capabilities = [];
        for (let i = 0; i < vehurl.length; i++) {
          this.vehicles.push({
            vehicle_url: vehurl[i],
            vehicle_type: vehtype[i]
          })
        }
        this._translateLanguage();
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


  selectVehicle(data) {
    if (data.checked == true) {
      if (!(this.capabilities.indexOf(data.vehicle_type) > -1)) {
        this.capabilities.push(data.vehicle_type);
      }
    } else {
      if (this.capabilities.indexOf(data.vehicle_type) > -1) {
        var index = this.capabilities.indexOf(data.vehicle_type, 0);
        this.capabilities.splice(index, 1);
      }
    }
    console.log(this.capabilities.toString());
  }

  UpdateCap() {
    console.log(this.access_token);
    console.log(this.capabilities.toString());

    this.appprov.UpdateCapabilities(this.access_token, this.capabilities.toString()).then((res) => {
      this.appprov.presentAlert('Success!', 'Skillsets successfully updated!');
      // this.close();
    });
    this.close();
  }

  close() {
    // this.viewCtrl.dismiss();
    this.popover.dismiss();
  }

}
