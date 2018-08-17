import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GhprofileComponent } from './ghprofile/ghprofile.component';
import { GithubprofileService } from './services/githubprofile.service';

@NgModule({
  declarations: [
    AppComponent,
    GhprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
