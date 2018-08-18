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
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';

const routes:Routes=[
  {path:"ghprofile",component:GhprofileComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/goals",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
    declarations: [
    AppComponent,
    GhprofileComponent,
    NavbarComponent,
    
    AboutComponent,
    
    NotFoundComponent,
    
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
