import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Alert, ViewController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AppProvider } from '../../providers/app/app';
import { LoginPage } from '../../pages/login/login';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ToggleGesture } from 'ionic-angular/umd/components/toggle/toggle-gesture';

/**
 * Generated class for the ViewoperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
//@IonicPage()
@Component({
  selector: 'page-viewoperator',
  templateUrl: 'viewoperator.html',
})
export class ViewoperatorPage {

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

  email: string;
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
  // @ViewChild('doughnutCanvas2') doughnutCanvas2;
  // doughnutChart2: any;
  // @ViewChild('doughnutCanvas3') doughnutCanvas3;
  // doughnutChart3: any;
  // @ViewChild('doughnutCanvas4') doughnutCanvas4;
  // doughnutChart4: any;

  eventSource;
  viewTitle;
  isToday:boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  private access_token: string;

  owner_job: string[];
  operator_job: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appprov:AppProvider,
    private storage: Storage,
    private view: ViewController,
    private alertCtrl: AlertController,
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
          this.getOperatorDetails(this.email);
          // this.getChartData(this.email);
          this.getOperatorUtil(this.email);
          this.getOperatorSchedule(this.email);
          this._initializeTranslation();
        }
      });
      this.email = navParams.get('email');

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ViewoperatorPage');
    console.log("operator email is " + this.email);
    this._initializeTranslation();
    // this.getOperatorDetails(this.email);
    // this.getChartData(this.email);
    // this.getOperatorSchedule(this.email);
    // var job = {date_from:["2018-09-20", "2018-09-30","2018-09-12","2018-10-12"]}
  }

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
  //TODAY chart
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
          label: 'Statistics',
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
            gridLines: {display:false}, 
            callback: function(value){return value + "%"}
          },
        scaleLabel:{
          display:true,
          labelString: "Days"
        }
          }],
        },
        legend: {display:false}
      }
    })  
    // if (this.owner_job[0] == '0'){
    //   this.owner_job[0] = '2';
    // }
    // if (this.operator_job[0] == '0'){
    //   this.owner_job[0] = (parseInt(this.owner_job[0])+ 1).toString();
    // }
    // // console.log (this.owner_job[0]);
    // // console.log(this.operator_job[0]);
    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    //   type: 'doughnut',
    //   data:{
    //     labels: [this.assigned, this.job_count],
    //     datasets: [{
    //       label: "Operator Utilization",
    //       // data: [this.operator_job[0], parseInt(this.owner_job[0])-1],
    //       data: ['5', '10'],
    //       backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
    //       borderColor: "rbga(0, 110, 255, 1)",
    //       borderWidth:1
    //     }]
    //   }
    // });
  }

  // getJobStats2(){
  //   if (this.owner_job[1] == '0'){
  //     this.owner_job[1] = '2';
  //   }
  //   if (this.operator_job[1] == '0'){
  //     this.owner_job[1] = (parseInt(this.owner_job[0])+ 1).toString();
  //   }
  //   this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
  //     type: 'doughnut',
  //     data:{
  //       labels: [this.assigned, this.job_count],
  //       datasets: [{
  //         label: "Operator utilization",
  //         data: [this.operator_job[1], parseInt(this.owner_job[1])-1],
  //         backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
  //         borderColor: "rbga(0, 110, 255, 1)",
  //         borderWidth:1
  //       }]
  //     }
  //   });
  // }

  // getJobStats3(){
  //   if (this.owner_job[2] == '0'){
  //     this.owner_job[2] = '2';
  //   }
  //   if (this.operator_job[2] == '0'){
  //     this.owner_job[2] = (parseInt(this.owner_job[0])+ 1).toString();
  //   }

  //   this.doughnutChart3 = new Chart(this.doughnutCanvas3.nativeElement, {
  //     type: 'doughnut',
  //     data:{
  //       labels: [this.assigned, this.job_count],
  //       datasets: [{
  //         label: "Operator utilization",
  //         data: [this.operator_job[2], parseInt(this.owner_job[2])-1],
  //         backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
  //         borderColor: "rbga(0, 110, 255, 1)",
  //         borderWidth:1
  //       }]
  //     }
  //   });
  // }
  //comment this blok sn 26
    //YEAR chart
  // getJobStats4(){
  //   if (this.owner_job[3] == '0'){
  //     this.owner_job[3] = '2';
  //   }
  //   if (this.operator_job[3] == '0'){
  //     this.owner_job[3] = (parseInt(this.owner_job[0])+ 1).toString();
  //   }

  //   this.doughnutChart4 = new Chart(this.doughnutCanvas4.nativeElement, {
  //     type: 'doughnut',
  //     data:{
  //       labels: [this.assigned, this.job_count],
  //       datasets: [{
  //         label: "Operator utilization",
  //         data: [this.operator_job[3], parseInt(this.owner_job[3])-1],
  //         backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
  //         borderColor: "rbga(0, 110, 255, 1)",
  //         borderWidth:1
  //       }]
  //     }
  //   });
  // }

  // getChartData(email){
  //   this.appprov.getChartData(email, this.access_token).then((res) => {
  //     let data = JSON.stringify(res);
  //     data = JSON.parse(data);
  //     //2 lines below does not work. does not assign value to variable.
  //     this.operator_job = data['operator'];
  //     this.owner_job = data['owner'];
  //     console.log(this.operator_job);
  //     if (this.owner_job){
  //       this.getJobStats();
  //       // this.getJobStats2();
  //       // this.getJobStats3();
  //       // this.getJobStats4();
  //     }
  //     else{
  //       this.owner_job = ['0','0','0','0'];
  //       this.operator_job = ['0','0','0','0'];
  //       this.getJobStats();
  //       // this.getJobStats2();
  //       // this.getJobStats3();
  //       // this.getJobStats4();
  //     }
  //   }, err=>{
  //     console.log(err);
  //   });
  // }

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
  

  deleteOperator(){
    console.log("Deleting Contact");
    let alert = this.alertCtrl.create({
      title: this.deletemsgtitle,
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
    alert.present();
  }

  closeModal(){
    console.log("closing modal");
    this.view.dismiss();
  }
  }
  