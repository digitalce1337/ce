import { Injectable} from '@angular/core';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk';


/*
  Generated class for the KakaologinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KakaologinProvider {

  res: any;

  constructor(public _kakaoCordovaSDK: KakaoCordovaSDK) {
    console.log('Hello KakaologinProvider Provider');

    let loginOptions = {};
    loginOptions['authTypes'] = [
      AuthTypes.AuthTypeTalk,
      AuthTypes.AuthTypeStory,
      AuthTypes.AuthTypeAccount
    ];
    this._kakaoCordovaSDK.login(loginOptions).then((res) => {
      console.log(res);
      this.res = res;
      return this.res;
    });
    return this.res;
  }




}
