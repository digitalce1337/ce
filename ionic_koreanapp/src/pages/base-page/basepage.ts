import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, Tab } from 'ionic-angular';
import { Http } from '@angular/http';
import { AuthProvider } from '../../providers/auth/auth';
import { AppProvider } from '../../providers/app/app';


export class BasePage {

  public access_token: string;

  constructor(public appprov: AppProvider) {

    this.access_token = appprov.access_token;
  }
}
