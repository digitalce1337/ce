import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-owner-add-operator',
  templateUrl: './owner-add-operator.page.html',
  styleUrls: ['./owner-add-operator.page.scss'],
})
export class OwnerAddOperatorPage implements OnInit {

  
  public language: string;
  public title: string;
  public email: string;
  public skills: string;
  public add: string;
  public errormsgtitle: string;
  public errormsg: string;
  public addmsg: string;

  // private access_token:string;
  //Zul account
  // public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';  
  //Jem account
  private access_token:string ='EAAf9qfuOeRABAMaaCS2IHAYrmREB2QCQoT2zvTQMwHWJrcisIZBXNkxhFn3nlWyPgZAJD6ZBtzo3KkTZAxjAZBQRyWYadKuctjN73pcYgJVsXTAAlGdRD0mQjPORpotRPZAUts2Q01sZCN58mlc6PO203JAR9TFwiYDDAq2jbymXkONFZBqRqrj3CSDN9x9mAMB5dZATjWSYzVj5Bw1me25biYNZA4NPiaZC0wut7IQWv21XgZDZD';


  loading:any;

  vehicle: Array<{
    vehicle_url: string,
    vehicle_type: string
  }>;

  public vehicle_type: string[];
  public vehicle_url: string[];
  public check_email: string;
  public add_operator: string;
  emailField: string = "";

  selectedArray: any = [];

  constructor(public navCtrl: NavController, public _translate: TranslateService, public modalCtrl: ModalController,
    public appprov: AppService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) { }

  ngOnInit() {
    this.getVehicleUrl();
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
      this.title =  this._translate.instant("addoperator.title");
      this.email = this._translate.instant("addoperator.email");
      this.skills = this._translate.instant("addoperator.skills");
      this.add = this._translate.instant("addoperator.add");
      this.errormsgtitle = this._translate.instant("addoperator.errormsgtitle");
      this.errormsg = this._translate.instant("addoperator.errormsg");
      this.addmsg = this._translate.instant("addoperator.addmsg");
  }

  /*Function to close page. the close button to close page*/
  closeModal(){
    // this.view.dismiss();
    this.modalCtrl.dismiss();
  }

  /*getting the vehicle image of operator skill set */
  getVehicleUrl(){
    console.log("getting vehicle url");
    // this.appprov.getVehicleUrl(this.access_token).then((res) =>{
    this.appprov.getVehicleUrl(this.access_token).then((res) =>{
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.vehicle_url = data['vehicle_url'];
      this.vehicle_type= data['vehicle_type'];
      this.vehicle = [];
      console.log(this.vehicle_url);
      for (let i=0; i<this.vehicle_url.length; i++){
        this.vehicle.push({
          vehicle_url: this.vehicle_url[i],
          vehicle_type: this.vehicle_type[i],
        })
      } 
  }, err =>{
    console.log(err);
  });
  } 
  

  showLoader(){
    this.loading = this.loadingCtrl.create({
      message: 'Loading...'
    });
    this.loading.present();
  }

  async dneEmail() {
    let alert = await this.alertCtrl.create({
      header: 'Email does not exists',
      subHeader: 'Double check email or invite him via kakaotalk',
      buttons: ['OK']
    });
    await alert.present();
  }

  async OpAlertFalse() {
    let alert = await this.alertCtrl.create({
      header: 'Fail to add operator',
      subHeader: 'Please try again',
      buttons: ['OK']
    });
    await alert.present();
  }

  async OpAlertTrue() {
    let alert = await this.alertCtrl.create({
      header: 'Operator added successfully',
      buttons: ['OK']
    });
    await alert.present();
    this.closeModal();
  }

  itemTappedAdd() {
    // console.log("going backkkkkkk");
    // this.navCtrl.navigateBack('/owner/tabs/owner-operators');

    console.log("adding oeprator");
    this.appprov.checkEmail(this.access_token, this.emailField).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.check_email = data['result'];
      if (this.check_email == 'false'){
        this.dneEmail();
      }
      else{
        let vehicletype = [];
        for (let i=0; i<this.selectedArray.length; i++){
          vehicletype[i] = this.selectedArray[i]['vehicle_type'];
        }
        this.appprov.addOperator(this.access_token, this.emailField, vehicletype).then((res) => {
          let data =JSON.stringify(res);
          data = JSON.parse(data);
          this.add_operator = data['result'];
          if (this.add_operator == 'false'){
            this.OpAlertFalse();
          }
          else{
            this.OpAlertTrue();
          }
        })
      }
    }, err => {
      console.log(err);
    });
  }

    /*Display the skill set of operator under the name*/
    selectVehicle(data){
      if (data.checked == true) {
        this.selectedArray.push(data);
      }else{
        let newArray = this.selectedArray.filter(function(el){
          return el.vehicle_type !== data.vehicle_type;
        });
        this.selectedArray = newArray;
      }
      console.log(this.selectedArray);
    }

}
