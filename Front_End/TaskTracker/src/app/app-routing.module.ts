import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewtasksComponent } from './viewtasks/viewtasks.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'view-tasks',component:ViewtasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
