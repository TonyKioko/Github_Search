import { Injectable } from '@angular/core';
// import {HttpClient,Headers} from '@angular/common/http';
import { Http,Headers } from '@angular/http';
import {environment} from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class GithubprofileService {
  private username: string;
  // private apiKey = 'd20f70c1ffa0ea106e7ab01ba8d7f753e83dab8a';

  constructor(private _http:Http) {
    // this.username ='TonyKioko';

  }
  acquireProfileInfo(){
    return this._http.get("https://api.github.com/users/"+this.username+"?access_token=" +environment.apiKey)
    .map(res => res.json());
  }
  acquireProfileRepos(){
    return this._http.get("https://api.github.com/users/"+this.username + "/repos"+"?access_token=" +environment.apiKey)
    .map(res => res.json());
  }
  updateUserName(username:string){
    this.username = username;

  }

}
