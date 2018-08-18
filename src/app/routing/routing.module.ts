import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { GhprofileComponent } from '../ghprofile/ghprofile.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';

const routes:Routes=[
  {path:"ghprofile",component:GhprofileComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/ghprofile",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
