import { Component, OnInit } from '@angular/core';
import { GithubprofileService } from '../services/githubprofile.service';


@Component({
  selector: 'app-ghprofile',
  templateUrl: './ghprofile.component.html',
  styleUrls: ['./ghprofile.component.css']
})
export class GhprofileComponent implements OnInit {
  username: string;
  profile: any;
  repos:any;


  constructor(private githubprofileService:GithubprofileService) { }

  ngOnInit() {
  }
  searchProfile(){
    this.githubprofileService.updateProfile(this.username);
    this.githubprofileService.acquireProfileInfo().subscribe(profile => {
      this.profile = profile;
    });
    this.githubprofileService.acquireProfileRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
