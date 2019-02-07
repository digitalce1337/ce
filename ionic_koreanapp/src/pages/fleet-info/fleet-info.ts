import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the FleetInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fleet-info',
  templateUrl: 'fleet-info.html',
})
export class FleetInfoPage { 

  public language: string;
  public title: string;
  public serial_no: string;
  public purchase_date: string;
  public remove_vehicle: string;
  public machine_hour: string;
  public maintenance: string;
  public completed: string;
  public last_service: string;
  public upcomming: string;
  public employment: string;
  public utilization: string;
  public month: string;
  public year: string;
  public deletemsgtitle: string;
  public deletemsg: string;
  public total_job_count: string;
  public total_no_job: string;
  public assigned: string;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  @ViewChild('doughnutCanvas2') doughnutCanvas2;
  doughnutChart2: any;

  eventSource = [];

  viewTitle: string;
  selectedDay = new Date();
  // Vehdata = {
  //   modelno: '',
  //   serialno: '',
  //   owner: ''
  // };
  vehicle = {
    img: '',
    model_no: '',
    serial_no: '',
    purchase_date: '',
    machine_hour: '',
    completed_count: '0',
    last_service:'N/A',
    upcoming_count:'0',
    upcoming_date:'',
    upcoming_place:''
  }

  calendar = {
    mode:'month',
    currentDate: this.selectedDay
  }

  SelectedVeh: any;

  private access_token: string;

  public todaydate: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appprov:AppProvider,
    private storage: Storage,
    public popoverCtrl:PopoverController,
    public modalCtrl:ModalController,
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
          this.SelectedVeh = navParams.get('item');
          console.log(this.SelectedVeh);
          this.todaydate = new Date();
          this.retrieveVehicleInfo(this.SelectedVeh);
          this.retrievePurchaseDate(this.vehicle.serial_no);
          this.retrieveMachineHour(this.vehicle.serial_no);
          this.retrieveMaintenanceCompleted(this.vehicle.serial_no, this.todaydate);
          this.retrieveMaintenanceUpcoming(this.vehicle.serial_no, this.todaydate);
          this.retrieveVehicleSchedule(this.vehicle.serial_no);
          this.retrieveVehicleUtil(this.vehicle.serial_no);
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
      this.title =  this._translate.instant("fleet-info.title");
      this.serial_no =  this._translate.instant("fleet-info.serial_no");
      this.purchase_date =  this._translate.instant("fleet-info.purchase_date");
      this.remove_vehicle =  this._translate.instant("fleet-info.remove_vehicle");
      this.machine_hour =  this._translate.instant("fleet-info.machine_hour");
      this.maintenance =  this._translate.instant("fleet-info.maintenance");
      this.completed =  this._translate.instant("fleet-info.completed");
      this.last_service =  this._translate.instant("fleet-info.last_service");
      this.upcomming =  this._translate.instant("fleet-info.upcomming");
      this.employment =  this._translate.instant("fleet-info.employment");
      this.utilization =  this._translate.instant("fleet-info.utilization");
      this.month =  this._translate.instant("fleet-info.month");
      this.year =  this._translate.instant("fleet-info.year");
      this.deletemsgtitle =  this._translate.instant("fleet-info.deletemsgtitle");
      this.deletemsg =  this._translate.instant("fleet-info.deletemsg");
      this.total_job_count =  this._translate.instant("fleet-info.total_job_count");
      this.total_no_job =  this._translate.instant("fleet-info.total_no_job");
      this.assigned =  this._translate.instant("fleet-info.assigned");
  }


  retrieveVehicleInfo(vehicle){
    this.vehicle.img = vehicle.img;
    this.vehicle.model_no = vehicle.Modelno;
    this.vehicle.serial_no = vehicle.serialno;
  }

  retrievePurchaseDate(serial_no){
    this.appprov.retrieveVehPurchaseDate(serial_no, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.vehicle.purchase_date = data['purchase_date'];
      }, err=>{
      console.log(err);
    });
  }

  retrieveMachineHour(serial_no){
    this.appprov.retrieveMachineHour(serial_no, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.vehicle.machine_hour = data['machine_hour'];
    }, err => {
      console.log(err);
    });
  }

  retrieveMaintenanceCompleted(serial_no, todaydate){
    this.appprov.retrieveMaintenanceCompleted(serial_no, this.access_token, todaydate).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.vehicle.completed_count = data['count'];
      this.vehicle.last_service = data['lastservice'];
      }, err=>{
      console.log(err);
    });
  }

  retrieveMaintenanceUpcoming(serial_no, todaydate){
    this.appprov.retrieveMaintenanceUpcoming(serial_no, this.access_token, todaydate).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.vehicle.upcoming_count = data['count'];
      this.vehicle.upcoming_date = data['upcoming'];
      this.vehicle.upcoming_place = "@ "+ data['location'];
      }, err=>{
      console.log(err);
    });
  }

  retrieveVehicleSchedule(serial_no){
    this.appprov.retrieveVehicleSchedule(serial_no, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let job_desc = data['desc'];
      let date_from = data['date_from'];
      let date_to = data['date_to'];
      let job = {'job_desc':job_desc, 'job_datefrom':date_from, 'job_dateto':date_to};
      console.log(job)
      this.loadEvents(job);
      }, err=>{
      console.log(err);
    });
  }

  retrieveVehicleUtil(serial_no){
    this.appprov.retrieveVehicleUtil(serial_no, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let vehicle_month = data['vehicle_month'];
      let vehicle_year = data['vehicle_year'];
      let month_total = data['month_total'];
      let year_total = data['year_total'];
      this.getJobStats(vehicle_month, month_total);
      // sthis.getJobStats2(vehicle_year, year_total); //comment this sn 27
      }, err=>{
      console.log(err);
    });
  }

  loadEvents(job){
    this.eventSource = this.plotSchedule(job);
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(ev){
    console.log(ev);
  }

  onEventSelected(event){
      console.log(event);

  }

  allmethods(serial_no){
    this.retrieveMaintenanceCompleted(serial_no, this.todaydate);
    this.retrieveMaintenanceUpcoming(serial_no, this.todaydate);
    this.retrieveVehicleSchedule(serial_no);
  }
  
  AddMaintenance(){
    const PopMod = this.popoverCtrl.create("AddMaintenancePage",{vehicle:this.vehicle},{showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'});
    PopMod.present();
    PopMod.onDidDismiss(() => this.allmethods(this.vehicle.serial_no));
    }

  EditMaintenance(){
    const Modal = this.modalCtrl.create("EditMaintenancePage",{vehicle:this.vehicle},{showBackdrop: true, enableBackdropDismiss: true});
    Modal.present();
    Modal.onDidDismiss(() => this.allmethods(this.vehicle.serial_no));
  }

  plotEvents(event:{id:number,title:string,startTime:Date,endTime:Date,allDay:boolean}){
    let eventdata = event;

    eventdata.startTime = new Date(event.startTime);
    eventdata.endTime = new Date(event.endTime);
    let events = this.eventSource;
    events.push(eventdata);
    this.eventSource = [];
    this.eventSource = events;
  }

  plotSchedule(jobs){
    var job = [];
    var dates_from = jobs.job_datefrom;
    var dates_to = jobs.job_dateto;
    var jids = jobs.job_desc;
    var today = new Date()
    for (let i=0; i<dates_from.length; i++){
      var start_day = new Date(Date.UTC(dates_from[i].substring(0,4), dates_from[i].substring(5,7)-1, parseInt(dates_from[i].substring(8,10), 10)));
      var end_day = new Date(Date.UTC(dates_to[i].substring(0,4), dates_to[i].substring(5,7)-1, parseInt(dates_to[i].substring(8,10),10)+1));
      console.log("pushing job");
      job.push({
        title: jids[i],
        startTime: start_day,
        endTime: end_day,
        allDay: true
      })
    }
    return job;
  }

  getJobStats(vehicle_month, month_total){
    if (month_total == '0'){
      month_total = '1';
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data:{
        labels: [this.assigned, this.total_job_count],
        datasets: [{
          label: "Vehicle Utilization",
          //data: [this.vehicle_month, month_total - this.vehicle_month],
          data: [vehicle_month, month_total-vehicle_month],
          backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
          borderColor: "rbga(0, 110, 255, 1)",
          borderWidth:1
        }]
      }
    });
  }
  //comment this block sn 27
  //YEAR chart
  // getJobStats2(vehicle_year, year_total ){
  //   if (year_total == '0'){
  //     year_total = '1';
  //   }
  //   this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
  //     type: 'doughnut',
  //     data:{
  //       labels: [this.assigned, this.total_job_count],
  //       datasets: [{
  //         label: "Vehicle utilization",
  //         data: [vehicle_year, year_total-vehicle_year],
  //         backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
  //         borderColor: "rbga(0, 110, 255, 1)",
  //         borderWidth:1
  //       }]
  //     }
  //   });
  // }

  deleteVehicle(serial_no, model_no){
    this.appprov.deleteVehicle(this.access_token, serial_no, model_no).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      console.log("vehicle deleted");
      this.navCtrl.pop();
      }, err=>{
      console.log(err);
    });
  }

}
