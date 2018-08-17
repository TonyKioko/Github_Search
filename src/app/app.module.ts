import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { GhprofileComponent } from './ghprofile/ghprofile.component';
import { GithubprofileService } from './services/githubprofile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes:Routes=[
  {path:"goals",component:GhprofileComponent},
  {path:"about",component:AboutComponent}
]

@NgModule({
    declarations: [
    AppComponent,
    GhprofileComponent,
    NavbarComponent,
    RouterModule.forRoot(routes),
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
