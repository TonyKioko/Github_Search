import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubprofileService {
  private username: string;
  private apiKey = 'd20f70c1ffa0ea106e7ab01ba8d7f753e83dab8a';

  constructor(private http:HttpClient) { 
    console.log("service is ready");
    this.username ='TonyKioko';
    
  }
  acquireProfileInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?access_token=" +this.apiKey);
  }
  acquireProfileRepos(){
    return this.http.get("https://api.github.com/users/"+this.username + "/repos"+"?access_token=" +this.apiKey);
  }
  updateProfile(username:string){
    this.username = username;

  }

}
