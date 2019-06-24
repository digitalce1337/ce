import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController, NavController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { AddMaintenanceComponent } from '../add-maintenance/add-maintenance.component';
import { EditMaintenanceComponent } from '../edit-maintenance/edit-maintenance.component';

@Component({
  selector: 'app-owner-fleet-info',
  templateUrl: './owner-fleet-info.page.html',
  styleUrls: ['./owner-fleet-info.page.scss'],
})
export class OwnerFleetInfoPage implements OnInit {

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

  date_day:string;
  date_mth:string;
  date_yr:string;

  @ViewChild('barVehCanvas') barVehCanvas;
  barVehChart: any;
  // @ViewChild('doughnutCanvas2') doughnutCanvas2;
  // doughnutChart2: any;

  eventSource = [];
  // eventSource;
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode:'month',
    currentDate: this.selectedDay
  }

  public serialno: string;
  public Modelno: string;
  public pdate:string;
  public Desc: string; 
  public vtype:string;
  public manu:string;
  public img: string;
  public machinehour:string = '';
  public completed_count:string = '0';
  public lastservice:string ='N/A';
  public upcoming_count:string ='0';
  public upcoming_date:string ='';
  public upcoming_place:string ='';
  
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

  SelectedVeh: any;

  // private access_token: string;
  //Zul account
  public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';  
  //Jem account
  // private access_token:string ='EAAf9qfuOeRABAMaaCS2IHAYrmREB2QCQoT2zvTQMwHWJrcisIZBXNkxhFn3nlWyPgZAJD6ZBtzo3KkTZAxjAZBQRyWYadKuctjN73pcYgJVsXTAAlGdRD0mQjPORpotRPZAUts2Q01sZCN58mlc6PO203JAR9TFwiYDDAq2jbymXkONFZBqRqrj3CSDN9x9mAMB5dZATjWSYzVj5Bw1me25biYNZA4NPiaZC0wut7IQWv21XgZDZD';

  public todaydate: any;

  constructor(public _translate: TranslateService, public appprov: AppService, public popoverCtrl: PopoverController,
    public navCtrl: NavController, public router: Router, public activeRoute: ActivatedRoute,
    public modalCtrl: ModalController) { 
      
      this.activeRoute.queryParams.subscribe(params => {
        this.serialno = params["serialno"];
        this.Modelno = params["Modelno"];
        this.pdate = params["pdate"];
        this.Desc = params["Desc"];
        this.vtype = params["vtype"];
        this.manu = params["manu"];
        this.img = params["img"];
        
      });
      console.log(this.Modelno);
    }

  ngOnInit() {
    this._initializeTranslation();
    this.retrieveVehicleInfo();
    this.retrieveMachineHour(this.serialno);
    this.retrieveMaintenanceCompleted(this.serialno, this.todaydate);
    this.retrieveMaintenanceUpcoming(this.serialno, this.todaydate);
    this.retrieveVehicleSchedule(this.serialno);
    this.retrieveVehicleUtil(this.serialno,this.Modelno);
    // this.retrieveVehicleInfo(this.SelectedVeh);
    // this.retrievePurchaseDate(this.vehicle.serial_no);
    // this.retrieveMachineHour(this.vehicle.serial_no);
    // this.retrieveMaintenanceCompleted(this.vehicle.serial_no, this.todaydate);
    // this.retrieveMaintenanceUpcoming(this.vehicle.serial_no, this.todaydate);
    // this.retrieveVehicleSchedule(this.vehicle.serial_no);
    
    // this._initializeTranslation();
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


  // retrieveVehicleInfo(vehicle){
  retrieveVehicleInfo(){
    this.vehicle.img = this.img;
    this.vehicle.model_no = this.Modelno;
    this.vehicle.serial_no = this.serial_no;
    console.log("retrieveVehInfo: " + this.vehicle.serial_no);
    // this.vehicle.img = vehicle.img;
    // this.vehicle.model_no = vehicle.Modelno;
    // this.vehicle.serial_no = vehicle.serialno;
  }

  // retrievePurchaseDate(serial_no){
  //   this.appprov.retrieveVehPurchaseDate(serial_no, this.access_token).then((res) => {
  //     let data = JSON.stringify(res);
  //     // data = JSON.parse(data);
  //     this.vehicle.purchase_date = data['purchase_date'];
  //     // this.date_yr = this.vehicle.purchase_date.substring(0,4);
  //     // this.date_mth = this.vehicle.purchase_date.substring(5,7);
  //     // this.date_day = this.vehicle.purchase_date.substring(8,10);
  //     // this.vehicle.purchase_date = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
  //     }, err=>{
  //     console.log(err);
  //   });
  // }

  retrieveMachineHour(serial_no){
    this.appprov.retrieveMachineHour(serial_no, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      // this.vehicle.machine_hour = data['machine_hour'];
      this.machinehour = data['machine_hour'];
    }, err => {
      console.log(err);
    });
  }

  retrieveMaintenanceCompleted(serial_no, todaydate){
    this.appprov.retrieveMaintenanceCompleted(serial_no, this.access_token, todaydate).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.completed_count = data['count'];
      this.lastservice = data['lastservice'];
      // this.vehicle.completed_count = data['count'];
      // this.vehicle.last_service = data['lastservice'];
      
      }, err=>{
      console.log(err);
    });
  }

  retrieveMaintenanceUpcoming(serial_no, todaydate){
    this.appprov.retrieveMaintenanceUpcoming(serial_no, this.access_token, todaydate).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      // this.vehicle.upcoming_count = data['count'];
      // this.vehicle.upcoming_date = data['upcoming'];
      // this.vehicle.upcoming_place = "@ "+ data['location'];
      this.upcoming_count = data['count'];
      this.upcoming_date = data['upcoming'];
      this.upcoming_place = "@ "+ data['location'];
      }, err=>{
      console.log(err);
    });
  }

  retrieveVehicleSchedule(serial_no){
    this.appprov.retrieveVehicleSchedule(serial_no, this.access_token).then((res) => {
      console.log("retrieveVehicleSchedule: " + serial_no);
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let job_desc = data['desc'];
      console.log("job_desc: "+ job_desc);
      let date_from = data['date_from'];
      let date_to = data['date_to'];
      let job = {'job_desc':job_desc, 'job_datefrom':date_from, 'job_dateto':date_to};
      console.log(job)
      this.loadEvents(job);
      }, err=>{
      console.log(err);
    });
  }

  retrieveVehicleUtil(serial_no,model_no){
    this.appprov.retrieveVehicleUtil(serial_no,model_no, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let chartData = data['chartData'];
      // let vehicle_month = data['vehicle_month'];
      // let vehicle_year = data['vehicle_year'];
      // let month_total = data['month_total'];
      // let year_total = data['year_total'];
      this.getJobStats(chartData);
      // this.getJobStats(vehicle_month, month_total);
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
  
  async AddMaintenance(){
    // const PopMod = await this.popoverCtrl.create("AddMaintenancePage",{vehicle:this.vehicle},{showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'});
    // const PopMod = await this.popoverCtrl.create({component:AddMaintenancePage, componentProps:{vehicle:this.vehicle,showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'}});
    // const PopMod = await this.popoverCtrl.create({component:OwnerAddMaintenancePage, componentProps:{vehicle:this.vehicle,showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'}});
    const PopMod = await this.popoverCtrl.create({
      component:AddMaintenanceComponent, 
      // componentProps:{vehicle:this.vehicle,showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'}
      componentProps:{
        serial:this.serialno,
        model: this.Modelno,
        showBackdrop: true, 
        enableBackdropDismiss: true, 
        cssClass: 'popoverStyle'}
    });
    // const PopMod = await this.popoverCtrl.create({
    //   component:'owner-add-maintenance', 
    //   componentProps:{vehicle:this.vehicle,showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'}
    // });
    // "AddMaintenancePage",{vehicle:this.vehicle},{showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle'}
    
    // PopMod.dismiss(() => this.allmethods(this.serialno));
    console.log("add maintenance: " + this.serialno);
    // PopMod.dismiss(() => this.allmethods(this.vehicle.serial_no));
    // PopMod.onDidDismiss().then( data => {
    //   const serial = data[this.vehicle.serial_no];
    //   console.log("add maintenance: " + serial);
    // });
    return await PopMod.present();
    // PopMod.onDidDismiss(() => this.allmethods(this.vehicle.serial_no));
  }

  async EditMaintenance(){
    // const Modal = await this.modalCtrl.create("EditMaintenancePage",{vehicle:this.vehicle},{showBackdrop: true, enableBackdropDismiss: true});
    // const Modal = await this.modalCtrl.create({
    const Modal = await this.popoverCtrl.create({
      component:EditMaintenanceComponent, 
      componentProps:{vehicle:this.vehicle,showBackdrop: true, enableBackdropDismiss: true}
    });
    // const Modal = await this.modalCtrl.create({
    //   component:OwnerEditMaintenancePage, 
    //   componentProps:{vehicle:this.vehicle,showBackdrop: true, enableBackdropDismiss: true}
    // });
    
    Modal.dismiss(() => this.allmethods(this.vehicle.serial_no));
    return await Modal.present();
    // Modal.onDidDismiss(() => this.allmethods(this.vehicle.serial_no));
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
    console.log("plotSchedule: " + dates_from + " type: "+ typeof dates_from);
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

  getJobStats(chartData){
  // getJobStats(vehicle_month, month_total){
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var today = new Date();
    var month = today.getUTCMonth();
    var labels_month = [];
    var month_range = 4;
    var chart_DataPack = chartData;
    console.log("chartdata: " + chart_DataPack);
    var dataPack1 = ['7','14','14','4','22','20','15'];
    for(let i=0; i<month_range; i++)
    {
      labels_month.push(months[(month+12 - i)%12]);
    }
    labels_month.reverse();
    for(let i=1; i<month_range; i++)
    {
      labels_month.push(months[(month+12 + i)%12]);
    }
    this.barVehChart = new Chart(this.barVehCanvas.nativeElement, {
      type: 'bar',
      data:{
        labels: labels_month,
        datasets: [{
          label: '%',
          data: chart_DataPack,
          backgroundColor: "rgba(0, 110,255, 0.2)",
          borderWidth:1
        }]
      },
      options:{
        scales: {
          xAxes: [{
            gridLines: {display:false},          
          }],
          yAxes: [{
            ticks:{
            min: 0,
            max: 100,
            // gridLines: {display:false}, 
            callback: function(value){return value+ "%"}
          },
        scaleLabel:{
          display:true,
          // labelString: "Days"
        }
          }],
        },
        legend: {display:false}
      }
    })
  }
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
