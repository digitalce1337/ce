import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-owner-view-operator',
  templateUrl: './owner-view-operator.page.html',
  styleUrls: ['./owner-view-operator.page.scss'],
})
export class OwnerViewOperatorPage implements OnInit {

  public language: string;
  public txtoday: string;
  public delete_contact: string;
  public assigned: string;
  public job_count: string;
  public week: string;
  public month: string;
  public year: string;
  public deletemsgtitle: string;
  public deletemsg: string;
  public confirm: string;

  // email: string;
  email: string = 'jacob_rtlosle_chengson@tfbnw.net';
  name: string;
  PhotoUrl:string;

  vehicleslist: string;

  vehicles: Array<{
    vehicle_type:string,
    vehicle_img:string,
  }>;

  public vehicle_type: string[];
  public vehicle_img: string[];

  @ViewChild('barOpCanvas') barOpCanvas;
  barOpChart: any;

  eventSource;
  viewTitle;
  isToday:boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  // private access_token: string;
  //Zul account
  public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';  
  //Jem account
  // private access_token:string ='EAAf9qfuOeRABAMaaCS2IHAYrmREB2QCQoT2zvTQMwHWJrcisIZBXNkxhFn3nlWyPgZAJD6ZBtzo3KkTZAxjAZBQRyWYadKuctjN73pcYgJVsXTAAlGdRD0mQjPORpotRPZAUts2Q01sZCN58mlc6PO203JAR9TFwiYDDAq2jbymXkONFZBqRqrj3CSDN9x9mAMB5dZATjWSYzVj5Bw1me25biYNZA4NPiaZC0wut7IQWv21XgZDZD';

  owner_job: string[];
  operator_job: string[];


  constructor(public _translate: TranslateService, public modalCtrl: ModalController, public appprov: AppService,
    public alertCtrl: AlertController, public storage: Storage) { }

  ngOnInit() {
    this.storage.ready().then(()=>{      
      this.storage.get('access_token').then((val)=>{        
        this.access_token = val;               
        this._translateLanguage();      
        this.getOperatorDetails(this.email);
        this.getOperatorUtil(this.email);
        this.getOperatorSchedule(this.email);        
      })})
      }
  //   this.getOperatorDetails(this.email);
  //   this.getOperatorUtil(this.email);
  //   this.getOperatorSchedule(this.email);
  //   this._initializeTranslation();
  // }

  public changeLanguage(): void{
    this._translateLanguage();
  }
   
  private _translateLanguage() : void{
    this._translate.use(this.language);
    this._initializeTranslation();
  }
    
  private _initializeTranslation(): void{
      this.txtoday =  this._translate.instant("viewoperator.txtoday");
      this.delete_contact =  this._translate.instant("viewoperator.delete_contact");
      this.assigned =  this._translate.instant("viewoperator.assigned");
      this.job_count =  this._translate.instant("viewoperator.job_count");
      this.week =  this._translate.instant("viewoperator.week");
      this.month =  this._translate.instant("viewoperator.month");
      this.year =  this._translate.instant("viewoperator.year");
      this.deletemsgtitle = this._translate.instant("viewoperator.deletemsgtitle");
      this.deletemsg = this._translate.instant("viewoperator.deletemsg");
      this.confirm = this._translate.instant("viewoperator.confirm");
  }


  getOperatorSchedule(email){
    this.appprov.getOperatorSchedule(this.access_token, email).then((res) => {
      console.log(res);
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let job_desc = data['job_desc'];
      let job_datefrom = data['job_datefrom'];
      let job_dateto = data['job_dateto'];
      console.log(job_dateto);
      let job = {'job_desc':job_desc, 'job_dateto': job_dateto, 'job_datefrom':job_datefrom}
      console.log(job);
      this.loadEvents(job);
      this.plotSchedule(job);
    }, err =>{
      console.log(err);
    });
  }

  getOperatorDetails(email){
    this.appprov.getOperatorDetails(email, this.access_token).then((res) =>{
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      this.name = data['name'];
      this.vehicle_img = data['vehicle_img'];
      this.vehicle_type = data['vehicle_type'];
      this.PhotoUrl = data['profile_image_url'];
      this.vehicles = [];
      for (let i=0; i< this.vehicle_img.length; i++){
        this.vehicles.push({
          vehicle_type: this.vehicle_type[i],
          vehicle_img: this.vehicle_img[i],
        })
      }

    }, err =>{
      console.log(err);
    });
  }
  
//comment this block sn 26
  getJobStats(chartData){
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var today = new Date();
    var month = today.getUTCMonth();
    var labels_month = [];
    var month_range = 4;
    var chart_DataPack = chartData;
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
    this.barOpChart = new Chart(this.barOpCanvas.nativeElement, {
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
            callback: function(value){return value + "%"}
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

  getOperatorUtil(email){
    this.appprov.getOperatorUtil(email, this.access_token).then((res) => {
      let data = JSON.stringify(res);
      data = JSON.parse(data);
      let chartData = data['chartData']                
      this.getJobStats(chartData);              
    }, err=>{
      console.log(err);
    });
  }


  loadEvents(job){
    //var job = {jid:["001", "002"], date_from:["2018-10-10", "2018-10-12"], date_to:["2018-10-20","2018-10-22"]}
    this.eventSource = this.plotSchedule(job);
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  onEventSelected(event){
    console.log("Event selected:" + event.startTime + '-' + event.endTime + "," +event.title);
  }
  changeMode(mode){
    this.calendar.mode = mode;
  }
  today(){
    this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev){
    console.log("Selected time: " + ev.selectedTime + ", hasEvents: " + (ev.events !== undefined && ev.events.length !==0) + ", disabled: " + ev.disabled);
  }
  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }
  
  plotSchedule(jobs){
    var job = [];
    var dates_from = jobs.job_datefrom;
    var dates_to = jobs.job_dateto;
    var jids = jobs.job_desc;
    var today = new Date()
    for (let i=0; i<dates_from.length; i++){
      // var temp = parseInt(dates_to[i].substring(8,10), 10) + 1;
      // dates_to[i] = temp+dates_to[i].substring(5,7)+dates_to[i].substring(0,4);
      // var d = dates_from[i].substring(4,8)+"/"+dates_from[i].substring(0,2)+"/"+dates_from[i].substring(2,4);
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
  
  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
  

  async deleteOperator(){
    console.log("Deleting Contact");
    let alert = await this.alertCtrl.create({
      header: this.deletemsgtitle,
      message: this.deletemsg,
      buttons: [
        {
          text: this.confirm,
          handler: () => {
            console.log('Deleting');
            this.appprov.deleteOperator(this.email,this.access_token).then((res) =>{
              let data = JSON.stringify(res);
              data = JSON.parse(data);
              console.log(data['result']);
            }, err =>{
              console.log(err);
            });
            //this.navCtrl.pop();
            this.closeModal();
          }
        },
        {
        text: 'Cancel',
        role: 'cancel',
        handler: () =>{
          console.log("Canceled");
        }
        }
      ]
    });
    await alert.present();
  }

  closeModal(){
    console.log("closing modal");
    // this.view.dismiss();
    this.modalCtrl.dismiss();
  }

}
