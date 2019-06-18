import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-operator-home',
  templateUrl: './operator-home.page.html',
  styleUrls: ['./operator-home.page.scss'],
})
export class OperatorHomePage implements OnInit {
public language: string;
public welcome: string;

  constructor(public _translate: TranslateService) { }

  private _translateLanguage() : void{
    // this._translate.use(this.language);
    this._initializeTranslation();
  }
  private _initializeTranslation(): void{
    // this.title =  this._translate.instant("operatorhome.title");
    this.welcome =  this._translate.instant("operator-home.welcome");
    console.log(this.welcome);    
    // this.welcome =  this._translate.instant("operatorhome.welcome");
    // console.log(this.welcome);    
    // this.forecast =  this._translate.instant("operatorhome.forecast");
    // this.jobstats =  this._translate.instant("operatorhome.jobstats");
    // this.fleet =  this._translate.instant("operatorhome.fleet");
    // this.skill_sets =  this._translate.instant("operatorhome.skill_sets");
}
  ngOnInit() {    
    this._translateLanguage();
  }

}
