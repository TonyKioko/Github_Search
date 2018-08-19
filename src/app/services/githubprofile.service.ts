import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubprofileService {
  private username: string;
  private apiKey = 'd20f70c1ffa0ea106e7ab01ba8d7f753e83dab8a';

  constructor(private _http:HttpClient) {
    this.username ='TonyKioko';

  }
  acquireProfileInfo(){
    return this._http.get("https://api.github.com/users/"+this.username+"?access_token=" +this.apiKey);
  }
  acquireProfileRepos(){
    return this._http.get("https://api.github.com/users/"+this.username + "/repos"+"?access_token=" +this.apiKey);
  }
  updateUserName(username:string){
    this.username = username;

  }

}
