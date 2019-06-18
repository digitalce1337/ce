import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public language ='';
  public selected = '';
  constructor(private translate: TranslateService, private platform: Platform) { }
  // constructor(private translate: TranslateService,private storage: Storage, private platform: Platform) { }
  // constructor(private translate: TranslateService) { }
  
  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    console.log("Browser retrieved language: "+ language);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    // this.translate.setDefaultLang('kr');
    this.setLanguage('en');

    // this.storage.get(LNG_KEY).then(val => {
    //   if(val) {
    //     this.setLanguage(val);
    //     this.selected = val;
    //   }
    // })
  }

  getLanguages() {
    return[
      { text: 'English', value: 'en'},
      { text: 'Korean', value: 'kr'}
    ];
    
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    console.log("Language selected: "+this.selected);
    // this.storage.set(LNG_KEY, lng);
  }

}
