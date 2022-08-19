import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaddbooksComponent } from './admin/adminaddbooks/adminaddbooks.component';
import { AddreviewComponent } from './admin/adminaddbooks/user/registration/addreview/addreview.component';
import { LoginComponent } from './admin/adminaddbooks/user/registration/login/login.component';
import { RegistrationComponent } from './admin/adminaddbooks/user/registration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminviewreviewComponent } from './adminviewreview/adminviewreview.component';
import { AuthguardGuard } from './authguard.guard';
import { HomeComponent } from './home/home/home.component';
import { UserguardGuard } from './userguard.guard';

const routes: Routes = [

  {
    path:'home',
   component:HomeComponent
  },
 { path:'',
  component:HomeComponent
},

{
   path:'home/addbook',
   component:AdminaddbooksComponent,
   canActivate:[AuthguardGuard]
},
{
    path:'adminlogin',
    component:AdminloginComponent
},
{
  path:'userlogin',
  component:LoginComponent
},
{
  path:'userregister',
  component:RegistrationComponent

  
},

{
   path:'addreview/:id',
   component:AddreviewComponent,
   canActivate:[UserguardGuard]
 
},
{
  path:'viewreview/:id',
  component:AdminviewreviewComponent,
  canActivate:[AuthguardGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
