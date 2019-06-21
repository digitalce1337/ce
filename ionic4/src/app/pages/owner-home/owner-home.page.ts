import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.page.html',
  styleUrls: ['./owner-home.page.scss'],
})
export class OwnerHomePage implements OnInit {

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

  // public access_token:string;
  public access_token:string ='EAAf9qfuOeRABAL2aXLSPMZAde2U8ZCZCKoQEtXIzxmZCsxwSdjx7dxTaMOiQP8ZAuFB7gMnvwmohZBiyg4EFQH78FuwFR1VOL6vq2GZAK9aKdsVAeZBYAA9aaarSnxJWZCIEqU4bLX1hHYrLcsEDs0FFp4bSVYAMIJ5yZBIDtQxMl589jBi3BkDXDePk6Qsz5z5xooVQJQc7VVTH7CfTeGicwG';

  public displaydate: any;

  constructor(public appprov: AppService, public alertCtrl: AlertController, public authService: AuthService,
    private _translate: TranslateService) { 
    // this.getMonthlyPay();
    // this.getHomeFleetChart();    
    // this.getHomeOperatorChart();
  }

  ngOnInit() {
    this._initializeTranslation();
    this.getEmailPay();
    this.getOwnerJoblist(); 
    this.getUserInfo();
    this.getMonthlyPay();
    this.getVehicleStatus('');
    // this.getEarnings();
    // this.getFleetUsage();
    // this.getOperatorUsage();
    
    this.getHomeFleetChart();    
    this.getHomeOperatorChart();
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

  async presentAlert(title,msg){
    let alert = await this.alertCtrl.create({
      header: 'Home',
      subHeader: msg,
      buttons: ['Dismiss']
    });
    await alert.present();
  }
  
  
  getEmailPay(){
    this.appprov.getemail().then((res) => {
      this.UsrEmail = res;
      // this.getMonthlyPay(res);
      // this.getFleetData(res);
    }, err =>{
      console.log(err);
    });
  }
  
  getMonthlyPay(){ 
    // getMonthlyPay(email){ 
    this.appprov.getMonthlyPay(this.access_token).then((res) =>{
    // this.appprov.getMonthlyPay(email).then((res) =>{
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
    // this.authService.getUserinfo(this.access_token).then((result) => {
    this.authService.getUserinfo(this.access_token).then((result) => {
      this.userinfo = result;
      // this.userinfo = JSON.parse(this.userinfo._body);
      this.Uemail = this.userinfo.email;
      this.Udob = this.userinfo.dob;
      this.Uname = this.userinfo.name;
      this.uimg = this.userinfo.profile_image_url;
      this.Ucompany = this.userinfo.company_name;
      this.Ucompanyadd = this.userinfo.company_add;
      this.appprov.setemail(this.userinfo.email);
    }, (err) => {
      console.log('Coming from here: '+err);
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

  getEarnings(chartExpectedMoney,chartReceivedMoney)
  // getEarnings()
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
    var dataPack1 = ['5','14','14','4','30','45','60'];

    //Total
    var totalData = chartReceivedMoney;
    var dataPack2 = ['10','35','50','10','35','50','90'];

  
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
          label: 'Earned',
          data: totalData,
          // data: dataPack2,
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
  // getFleetUsage(){
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
    // var dataPack1 = [fleetPercentage,'14','14','4','30','45','60'];

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
          label: '%',
          // data: dataPack1,
          data: chartData_Pack,
          backgroundColor: "rgba(0, 110,255, 0.2)",
          // borderColor: "rbga(0, 110, 255, 1)",
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
            callback: function(value){ return value + "%"}
          },
        scaleLabel:{display:true}
          }],
        },
        legend: {display:false}
      }
    })
  }

  getOperatorUsage(chartData){
  // getOperatorUsage(){
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
          label: '%',
          data: chartData_Pack,
          // data: dataPack1,
          backgroundColor: "rgba(0, 110,255, 0.2)",
          // borderColor: "rbga(0, 110, 255, 1)",
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
            callback: function(value){ return value + "%"}
          },
        scaleLabel:{display:true}
          }],
        },
        legend: {display:false}
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

  // SwithProfile(){
  //   console.log('Clicked');
  //   this.storage.clear();
  //   this.nav.setRoot(LoginPage);
  //   console.log('yes');
  // }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };


}
