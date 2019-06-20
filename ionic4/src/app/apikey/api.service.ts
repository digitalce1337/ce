import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

   // apiKey = 'http://54.169.29.35/';
  public apiKey = 'http://192.168.43.27:8000/';
  // apiKey = 'http://localhost:8000/';
  // apiKey = 'http://10.178.26.64:8000/';
  // apiKey = 'http://54.169.214.70/';
}
