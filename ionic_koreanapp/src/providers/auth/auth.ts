import { Injectable } from '@angular/core';


import{ Storage } from '@ionic/storage';
import { apiKey } from '../../app/apiurls/serverurls.js';
import { Http , Headers } from '@angular/http';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token: any;

  constructor(public storage: Storage, public http: Http) {
    console.log('Hello AuthProvider Provider');
  }


  createAccount(details){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(apiKey+'auth/users/create/', JSON.stringify(details), {headers: headers})
          .subscribe(res => {
            let data = res.json();
          //  this.token = data.token;
            //this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
    });
  }

  login(credentials){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Acess-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');

      this.http.post(apiKey+'auth/jwt/create',JSON.stringify(credentials),{headers:headers})
      .subscribe(res => {
        let data = res.json();
        this.token = data.token;
        this.storage.set('token', data.token);
        resolve(data);
      }, (err) => {
        reject(err);

      });
    });
  }


  logout(){
    this.storage.set('token', '');
  }


  checkAuthentication(){

    return new Promise((resolve, reject) => {
    
    this.storage.get('token').then((value) => {
 
      // this.token = value;
       this.token = "";

      resolve(this.token)


    }, (err) => {
      reject(err);
    
    });   
  });
  }

  GetProducts(){
    // return new Promise((resolve,reject) => {
    //   let headers = new Headers();
    //   headers.append('Access-Control-Allow-Origin', '*');
    //   headers.append('Acess-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
    //   headers.append('Accept','application/json');
    //   headers.append('content-type','application/json');

    //   this.http.get(apiKey+'data/mrtstop',{headers:headers})
    //   .subscribe(res => {
    //     let data = res.json();
    //     resolve(JSON.stringify(data));
    //   }, (err) => {
    //     reject(err);

    //   });
    // });
    return new Promise(resolve =>{
      // let headers = new Headers();
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Acess-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
      // headers.append('Accept','application/json');
      // headers.append('content-type','application/json');
      this.http.get(apiKey).subscribe(data =>{
        resolve(data);
      }, err=> {
        console.log(err);
      })
    });
  }

  getUserinfo(AToken){
    return new Promise(resolve =>{
      this.http.get(apiKey + 'getUserInfo?access_token=' + AToken).subscribe(data => {
        resolve (data);
      }, err =>{
        console.log("error in auth getuserinfo");
        console.log(err);
      })
    });
  }

}
