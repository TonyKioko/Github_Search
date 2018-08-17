import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubprofileService {
  private username: string;
  private apiKey: string = 'd20f70c1ffa0ea106e7ab01ba8d7f753e83dab8a';

  constructor(private http:HttpClient) { 
    console.log("service is ready");
    
  }
}
