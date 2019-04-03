import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, Tab } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

import { Http } from '@angular/http';
import { AuthProvider } from '../../providers/auth/auth';
import { AppProvider } from '../../providers/app/app';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';
import { TranslateService } from '@ngx-translate/core';
import { BasePage } from '../base-page/basepage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) 
export class HomePage extends BasePage{

  public title: string;
  public welcome: string;
  public forecast: string;
  public fleet: string;
  public jobstats: string;
  public language: string;


  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  @ViewChild('barCanvasEarnings') barCanvasEarnings;
  EarningsChart: any;
  @ViewChild('barCanvasFleetUsage') barCanvasFleetUsage;
  FleetUsageChart: any;
  @ViewChild('barCanvasOperatorUsage') barCanvasOperatorUsage;
  OperatorUsageChart: any;

  eventSource;
  viewTitle;
  isToday:boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  vehicles: Array<{
    vehicle_type:string,
    ImgUrl: string,
    vehicle_status: string,
    vehicle_count: string
  }>;

  public vehicle_type: string[];
  public vehicle_count: string[];
  public ImgUrl: string[];
  public UsrEmail:any;
  public fleets: any;

  public pay: any;
  public payOut: string[];  

  public t1: any;
  public t2: any;
  public t3: any;
  public t4: any;
  public t5: any;

  public vehicle_status: string[];

  public users:any;
  public result: any;
  public display: string;
  public userinfo:any;

  public Uname: any;
  public Udob: any;
  public Uemail:any;
  public uimg:any; 
  public Ucompany: any;
  public Ucompanyadd: any;

  // private access_token:string;

  public displaydate: any;

  constructor(public navCtrl: NavController, 
    public http: Http, 
    public authService:AuthProvider,
    public alertCtrl:AlertController,
    public navParams:NavParams,
    public appprov:AppProvider,
    private storage: Storage,
    public kakao: KakaoCordovaSDK,
    public _translate: TranslateService) {
      super(appprov);

      storage.ready().then(() => {
        storage.get('access_token').then((val) => {
          if (val == null){
            console.log("No acccess token");
            this.navCtrl.setRoot(LoginPage);
          }
          else{
            console.log("Got access token");                   
            // this.access_token = val.toString();            
            this.getUserInfo();
            this.getEmailPay();
            // this.getTestFn();
            // this.getMonthlyPay();
            this.getVehicleStatus('');
            this.getOwnerJoblist();            
            this.getHomeFleetChart();
            this.getHomeOperatorChart();
            this._initializeTranslation();     
          }
        });//storage.get('access_token').then((val)
      });//storage.ready().then(()

      //storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q');
      //storage.clear();

  }// constructor
  
  /*app starts here. meaning all the id, translation, user info, job info, vehicle info, and all the info etc
    All are functions
  */

  ionViewDidEnter(){        
    // this.getUserInfo();
    this.getEmailPay();
    // this.getVehicleStatus('');
    // this.getOwnerJoblist();
    this.getHomeFleetChart();    
    this.getHomeOperatorChart();
    // this._initializeTranslation();
    
  }

  ionViewDidLoad(){
    this._initializeTranslation();
  }



public changeLanguage(): void{
  this._translateLanguage();
}

private _translateLanguage() : void{
//  this._translate.use(this.language);
  this._translate.setDefaultLang(this.language);
  this._initializeTranslation();
}
  
private _initializeTranslation(): void{
  setTimeout(()=>{
    this.title =  this._translate.instant("home.title");
    this.welcome = this._translate.instant("home.welcome");
    this.forecast = this._translate.instant("home.forecast");
    this.fleet = this._translate.instant("home.fleet");
    this.jobstats = this._translate.instant("home.jobstats");
  }, 200);
}

addCommaNumber(text){ 
  let x = (text.replace(/\B(?=(\d{3})+(?!\d))/g, ","));    
  return x;
 }

presentAlert(title,msg){
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: msg,
    buttons: ['Dismiss']
  });
  alert.present();
}


getEmailPay(){
  this.appprov.getemail().then((res) => {
    this.UsrEmail = res;
    this.getMonthlyPay(res);
    // this.getFleetData(res);
  }, err =>{
    console.log(err);
  });
}

getMonthlyPay(email){ 
  this.appprov.getMonthlyPay(email).then((res) =>{
    let data = JSON.stringify(res);
    data = JSON.parse(data);
    let chartExpectedMoney = data['Expected'];
    let chartReceivedMoney = data['Received'];        
    this.getEarnings(chartExpectedMoney,chartReceivedMoney);    
  }, err => {
    console.log(err);
  })
}

getHomeOperatorChart(){
  this.appprov.getHomeOperatorChart(this.access_token).then((res) =>{    
    var data = JSON.stringify(res);
    data = JSON.parse(data);    
    let chartFirstMonth = data['chartData'];  
    this.getOperatorUsage(chartFirstMonth);     
  }, err => {
    console.log(err);
  })
}

getHomeFleetChart(){
  this.appprov.getHomeFleetChart(this.access_token).then((res) =>{    
    var data = JSON.stringify(res);
    data = JSON.parse(data);    
    let chartFirstMonth = data['chartData'];  
    this.getFleetUsage(chartFirstMonth);     
  }, err => {
    console.log(err);
  })
}


//On start and access database to retrieve owner information
getOwnerJoblist(){
  this.appprov.getOwnerJoblist(this.access_token).then((res) => {
    let data = JSON.stringify(res);
    data = JSON.parse(data);
    let job_desc = data['job_desc'];
    let job_datefrom = data['job_datefrom'];
    let job_dateto = data['job_dateto']
    console.log(job_dateto);    
    let job = {'job_desc':job_desc, 'job_dateto': job_dateto, 'job_datefrom':job_datefrom}
    console.log(job);
    this.loadEvents(job);
    this.plotSchedule(job);
    // this.getJobStats({'date_from':job_datefrom});
    // this.getMonthlyPay();  
    // this.getEarnings();  
    // this.getMonthlyPay();  
    // this.getFleetChartDays();
    // this.getFleetHomeChart();
    // this.getFleetUsage();
    // this.getOperatorUsage();
  }, err =>{
    console.log(err);
  });
}

getUserInfo(){
  this.authService.getUserinfo(this.access_token).then((result) => {
    this.userinfo = result;
    this.userinfo = JSON.parse(this.userinfo._body);
    this.Uemail = this.userinfo.email;
    this.Udob = this.userinfo.dob;
    this.Uname = this.userinfo.name;
    this.uimg = this.userinfo.profile_image_url;
    this.Ucompany = this.userinfo.company_name;
    this.Ucompanyadd = this.userinfo.company_add;
    this.appprov.setemail(this.userinfo.email);
  }, (err) => {
    console.log(err);
  });
}

getVehicleStatus(datetime){
  console.log("-----------------------------");
  this.appprov.getEmail(this.access_token).then((res) => {
    this.UsrEmail = res;
    this.getVehicle(res,datetime);
  }, err =>{
    console.log(err);
  });
}

getVehicle(email, datetime){
  email = JSON.stringify(email);
  email = JSON.parse(email).email;
  this.appprov.getVehicleStatus(email,datetime).then((res) => {
    this.fleets = res;
    this.vehicle_type = this.fleets.vehicle_type;
    this.ImgUrl = this.fleets.ImgUrl;
    this.vehicle_count = this.fleets.vehicle_count;
    this.vehicles = [];
    this.vehicle_status = this.fleets.vehicle_type;
    console.log(JSON.stringify(res));
    console.log(this.vehicle_type.length);
    
    //To list the number of vehicle types and vehicles in the fleet added by owner
    for(let i = 0; i < this.vehicle_type.length; i++) {  
      if (this.vehicle_count[i] == "0"){
        this.vehicle_status[i] = "assets/imgs/redcircle.png";
      }
      else{
        this.vehicle_status[i] = "assets/imgs/greencircle.jpg";
      }
      this.vehicles.push({
        vehicle_type: this.vehicle_type[i],
        ImgUrl: this.ImgUrl[i],
        vehicle_status: this.vehicle_status[i],
        vehicle_count: this.vehicle_count[i],
      });
    }// end of for loop
  },(err) =>{
    console.log('error');
  })
}//end of getVehicle

/*To create the job statistics on home page (owner)*/
// getJobStats(jobs){
//   //add label x-axis
//   var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//   var today = new Date();
//   var month = today.getUTCMonth();
//   var labels_month = [];
//   var month_range = 4;

//   for(let i=0; i<month_range; i++)
//   {
//     labels_month.push(months[(month+12 - i)%12]);
//   }
//   labels_month.reverse();
//   for(let i=1; i<month_range; i++)
//   {
//     labels_month.push(months[(month+12 + i)%12]);
//   }
  
//   /*
//   Old codes
//   var labels_end = month-6;
//   for (let i = 0; i<6; i++){
//     labels_month.push(months[month-5+i]);
//   } */

//   // add data y-axis
//   var date_from = jobs.date_from;
//   var data_y = [0, 0, 0, 0, 0, 0];
//   for (let j =0; j<date_from.length; j++){
//     var temp = parseInt(date_from[j].substring(5,7), 10);
//     console.log(temp);
//     console.log(".....................................");
//     for (let p=0; p<6; p++){
//       if ((temp-1) == (month-p)){
//         data_y[5-p] += 1;
//       }
//     }
//   }
//   //creating of the bar graph
//   console.log(data_y);
//   this.barChart = new Chart(this.barCanvas.nativeElement, {
//     type: 'bar',
//     data:{
//       labels: labels_month,
//       datasets: [{
//         label: this.jobstats,
//         data: data_y,
//         backgroundColor: "rgba(0, 110,255, 0.2)",
//         borderColor: "rbga(0, 110, 255, 1)",
//         borderWidth:1
//       }]
//     }
//   })
// }// end of getJobStats


// numberwithcommas(x) {
//   return x.toString().replace(/\B(?=(\d{3}+(?!\d)))/g, ",");
// };

getEarnings(chartExpectedMoney,chartReceivedMoney)
{
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var today = new Date();
  var month = today.getUTCMonth();
  var labels_month = [];
  var month_range = 4;
  
  for(let i=0; i<month_range; i++)
  {
    labels_month.push(months[(month+12 - i)%12]);
  }
  labels_month.reverse();
  for(let i=1; i<month_range; i++)
  {
    labels_month.push(months[(month+12 + i)%12]);
  }
  //Expected
  console.log("Load test DATA SETTT");
  var ExpectedData = chartExpectedMoney;
  // var dataPack1 = ['5','14','14','4','30','45','60'];
  
  //Total
  var totalData = chartReceivedMoney;
  // var dataPack2 = ['10','35','50','10','35','50','90'];
  
 
  this.EarningsChart = new Chart(this.barCanvasEarnings.nativeElement, {
    type: 'bar',
    data:{
      labels: labels_month,
      datasets: [
        {
        label: 'Expected',
        data: ExpectedData,
        // data: dataPack1,
        // backgroundColor: "rgba(0, 110,255, 0.2)",
        backgroundColor: "rgba(107,142,35, 0.2)",                
        borderWidth:1
      },
      {
        label: 'Received',
        data: totalData,
        // backgroundColor: "rgba(51, 102, 102, 0.2)", //light green
        // backgroundColor: "rgba(225, 58, 55, 0.7)", //red            
        backgroundColor: "rgba(152,251,152, 0.2)",        
        borderWidth:1      
      },
    ]
    }, 
    options:{ 
      animation: {
        duration: 10,
      },
      tooltips:{
        mode:'label',
        callbacks: {
          label: function(tooltipItem,data){
            return data.datasets[tooltipItem.datasetIndex].label +": " +tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return this./(tooltipItem.yLabel.toString());                       
          },
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          gridLines: {display:false},          
        }],
        yAxes: [{
          stacked: false,
          // gridLines: {display:false},
          ticks:{
            // display:false,
            // callback: function(value){ return this.addCommaNumber(value);},          
            // beginatZero: true,
            min: 0,
            // max: 2000            
          },          
        }],
      },
      legend: {display:true}
    }
  })


}

getFleetUsage(chartData){
  // var specificMachine = [10,15,6,12];
  var baseDays = 22;
  var vehNum = 4;
  var fleetDays = baseDays * vehNum;
  var fleetPercentage = Math.round(((10+15+6+12)/fleetDays)*100);

  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var today = new Date();
  var month = today.getUTCMonth();
  var labels_month = [];
  var month_range = 4;
  var chartData_Pack = chartData;
  var dataPack1 = [fleetPercentage,'14','14','4','30','45','60'];
  for(let i=0; i<month_range; i++)
  {
    labels_month.push(months[(month+12 - i)%12]);
  }
  labels_month.reverse();
  for(let i=1; i<month_range; i++)
  {
    labels_month.push(months[(month+12 + i)%12]);
  }
  this.FleetUsageChart = new Chart(this.barCanvasFleetUsage.nativeElement, {
    type: 'bar',
    data:{
      labels: labels_month,
      datasets: [{
        label: 'Statistics',
        data: chartData_Pack,
        backgroundColor: "rgba(0, 110,255, 0.2)",
        // borderColor: "rbga(0, 110, 255, 1)",
        borderWidth:1
      }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks:{
          min: 0,
          max: 100,
          callback: function(value){ return value + "%"}
        },
      scaleLabel:{display:true}
        }],
      },
      legend: {display:true}
    }
  })
}

getOperatorUsage(chartData){
  // var specificMachine = [10,15,6,12];
  var baseDays = 22;
  var vehNum = 4;
  var fleetDays = baseDays * vehNum;
  var fleetPercentage = Math.round(((10+15+6+12)/fleetDays)*100);

  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var today = new Date();
  var month = today.getUTCMonth();
  var labels_month = [];
  var month_range = 4;
  var chartData_Pack = chartData;
  var dataPack1 = [fleetPercentage,'14','14','4','30','45','60'];

  for(let i=0; i<month_range; i++)
  {
    labels_month.push(months[(month+12 - i)%12]);
  }
  labels_month.reverse();
  for(let i=1; i<month_range; i++)
  {
    labels_month.push(months[(month+12 + i)%12]);
  }
  this.OperatorUsageChart = new Chart(this.barCanvasOperatorUsage.nativeElement, {
    type: 'bar',
    data:{
      labels: labels_month,
      datasets: [{
        label: 'Statistics',
        data: chartData_Pack,
        backgroundColor: "rgba(0, 110,255, 0.2)",
        borderColor: "rbga(0, 110, 255, 1)",
        borderWidth:1
      }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks:{
          min: 0,
          max: 100,
          callback: function(value){ return value + "%"}
        },
      scaleLabel:{display:true}
        }],
      },
      legend: {display:true}
    }
  })
}

loadEvents(job){
  this.eventSource = this.plotSchedule(job);
}
/*title of job*/
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
  this.getVehicleStatus(ev.selectedTime);
  this.displaydate = ev.selectedTime.toString().substring(4, 15);
}
onCurrentDateChanged(event:Date) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);
  this.isToday = today.getTime() === event.getTime();
}
/*creating of new job. add job button*/
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
}// end of plotSchedule

SwithProfile(){
  console.log('Clicked');
  this.storage.clear();
  this.navCtrl.setRoot(LoginPage);
  console.log('yes');
}

onRangeChanged(ev) {
  console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}
markDisabled = (date:Date) => {
  var current = new Date();
  current.setHours(0, 0, 0);
  return date < current;
};

}//class HomePage
