import { Component } from '@angular/core';

import { FleetsPage } from '../fleets/fleets';
import { OperatorsPage } from '../operators/operators';
import { HomePage } from '../home/home';
import{ JobsPage } from '../jobs/jobs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public language: string;
  public home: string;
  public operators: string;
  public jobs: string;
  public fleets: string;

  tab1Root = HomePage;
  tab2Root = JobsPage;
  tab3Root = FleetsPage;
  tab4Root = OperatorsPage;

  constructor(public _translate: TranslateService) {
    this._initializeTranslation();
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
        this.home =  this._translate.instant("tabs.home");
        this.fleets =  this._translate.instant("tabs.fleets");
        this.operators =  this._translate.instant("tabs.operators");
        this.jobs =  this._translate.instant("tabs.jobs");
    }
  

}
