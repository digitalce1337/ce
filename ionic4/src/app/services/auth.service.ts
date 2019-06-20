import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http/ngx'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Storage } from '@ionic/storage';
import { ApiService } from '../apikey/api.service';
import { BehaviorSubject } from 'rxjs';
import { asElementData } from '@angular/core/src/view';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { resolve } from 'q';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: any;
  // authenState = new BehaviorSubject(false);
  constructor(public http: HttpClient, public storage: Storage, private api: ApiService ) { }

  createAccount(details) {
    return new Promise((resolve, reject) => {

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      
      // let httpOptions = {headers:new HttpHeaders ({ 'Content-Type': 'application/json'})}, reponseType:'text' as 'json'};



      this.http.post(this.api.apiKey + 'auth/users/create/', JSON.stringify(details), { headers: headers })
        // .then(res => {
          .subscribe(res => {
          const data = res;
          // const data = res.json();
          //  this.token = data.token;
          // this.storage.set('token', data.token);
          resolve(data);

        }, (err) => {
          reject(err);
        });
        // this.authenState.next(true);
    });
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      // const headers = new Headers();
      const headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Acess-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');

      this.http.post(this.api.apiKey + 'auth/jwt/create', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          // .toPromise().then(res => {
          const data = res;
          // this.token = data.token;
          // this.storage.set('token', data.token);
          this.token = data['token'];
          this.storage.set('token', this.token);
          resolve(data);
        }, (err) => {
          reject(err);

        });
    });
  }


  logout() {
    this.storage.set('token', '');
    // this.authenState.next(false);
  }


  checkAuthentication() {

    return new Promise((resolve, reject) => {

      this.storage.get('token').then((value) => {
        // if(value) {
        //   this.authenState.next(true);
        // }
        // this.token = value;
        this.token = '';

        resolve(this.token);


      }, (err) => {
        reject(err);

      });
    });
  }

  // isAuthenticated() {
  //   return this.authenState.value;
  // }

  GetProducts() {
    return new Promise(resolve => {
      this.http.get(this.api.apiKey + '').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserinfo(AToken) {
    if (AToken === undefined) {
      return;
    }
    // return this.http.get(this.api.apiKey + 'getUserInfo?access_token='+ AToken,{responseType: 'json'}).pipe(tap(data => {
    // // return this.http.get(environment.apiKey + 'getUserInfo?access_token='+ AToken,{responseType: 'json'}).pipe(data => {
    //   console.log(data);
    //   // resolve(data);
    // }, err => {
    //   console.log('error in auth getuserinfo');
    //   console.log(err);
    // });

    // return this.http.get(this.api.apiKey + 'getUserInfo?access_token='+AToken).pipe(tap(data => {
    //   console.log(data);
    //   resolve(data);
    //   // return data;
    // })
    // )

    return new Promise<any>((resolve) => {
      let res = this.http.get(this.api.apiKey + 'getUserInfo?access_token='+AToken);
      res.subscribe((data) => {
        console.log('here in authService getuserinfo');
        console.log(data);
        resolve(data);
      }, error => {
        console.log('error in auth getuserinfo');
        console.log(error);
      });
    });
    

    // return new Promise(resolve => {
    //   // this.http.get(this.apiKey + 'getUserInfo?access_token='+ AToken).subscribe(data => {
    //   // this.http.get(environment.apiKey + 'getUserInfo?access_token='+ AToken).subscribe(data => {
    //   this.http.get(environment.apiKey + 'getUserInfo?access_token='+ AToken,{responseType: 'json'}).subscribe(data => {
    //     console.log(data);
    //     // resolve(data);
    //   }, err => {
    //     console.log('error in auth getuserinfo');
    //     console.log(err);
    //   });
    // });
  }



}
