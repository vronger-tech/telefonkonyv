import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent } from './api/api.component';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'telefonkonyv',component:ApiComponent},
  {path:'feladat1',component:F1Component},
  {path:'feladat2',component:F2Component},
  {path:'Home',component:HomeComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
