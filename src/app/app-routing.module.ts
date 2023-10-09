import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* new home component */
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [

  /* Home component path */
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
