import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubprofileService {
  private username: string;
  // private apiKey = 'd20f70c1ffa0ea106e7ab01ba8d7f753e83dab8a';

  constructor(private _http:HttpClient) {
    this.username ='TonyKioko';

  }
  acquireProfileInfo(){
    return this._http.get("https://api.github.com/users/"+this.username+"?access_token=" +environment.apiKey);
  }
  acquireProfileRepos(){
    return this._http.get("https://api.github.com/users/"+this.username + "/repos"+"?access_token=" +environment.apiKey);
  }
  updateUserName(username:string){
    this.username = username;

  }

}
