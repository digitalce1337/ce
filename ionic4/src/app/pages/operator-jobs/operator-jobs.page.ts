import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-operator-jobs',
  templateUrl: './operator-jobs.page.html',
  styleUrls: ['./operator-jobs.page.scss'],
})
export class OperatorJobsPage implements OnInit {
  public title: string;
  private access_token: any;
  constructor(public _translate: TranslateService,public appprov: AppService, public alertCtrl: AlertController, public authService: AuthService,public storage: Storage) {}
  // constructor() { }

  ngOnInit() {
    this.storage.ready().then(()=>{
      this.storage.get('access_token').then((val)=>{
        this.access_token = val;       
        this._translateLanguage();        
      })})
  }
  //   this._translateLanguage();
  // }
 
  private _translateLanguage() : void{
    // this._translate.use(this.language);
    this._initializeTranslation();
  }
  private _initializeTranslation(): void{
    this.title =  this._translate.instant("operatorjob.title");
    // console.log(this.welcome);        
}
}

