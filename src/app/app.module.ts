import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {RoutingModule} from './routing/routing.module';
import {TimeAgoPipe} from 'time-ago-pipe';


import { AppComponent } from './app.component';
// import { GhprofileComponent } from './ghprofile/ghprofile.component';
import { GithubprofileService } from './services/githubprofile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GhprofileComponent } from './ghprofile/ghprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';

// const routes:Routes=[
//   {path:"ghprofile",component:GhprofileComponent},
//   {path:"about",component:AboutComponent},
//   {path:"",redirectTo:"/goals",pathMatch:"full"},
//   {path:'**',component:NotFoundComponent}
// ]

@NgModule({
    declarations: [
    AppComponent,
    GhprofileComponent,
    NavbarComponent,
    
    AboutComponent,
    
    NotFoundComponent,
    TimeAgoPipe,
    
    DateCountPipe,
    
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
    // RouterModule.forRoot(routes)
  ],
  providers: [GithubprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
