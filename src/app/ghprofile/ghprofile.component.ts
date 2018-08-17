import { Component, OnInit } from '@angular/core';
import { GithubprofileService } from '../services/githubprofile.service';


@Component({
  selector: 'app-ghprofile',
  templateUrl: './ghprofile.component.html',
  styleUrls: ['./ghprofile.component.css']
})
export class GhprofileComponent implements OnInit {
  username: any[];
  profile: any[];
  repos:any[];


  constructor() { }

  ngOnInit() {
  }

}
