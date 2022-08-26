import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AdminaddbooksComponent } from './admin/adminaddbooks/adminaddbooks.component';
import { LoginComponent } from './admin/adminaddbooks/user/registration/login/login.component';
import { RegistrationComponent } from './admin/adminaddbooks/user/registration/registration.component';
import { AdminviewreviewComponent } from './adminviewreview/adminviewreview.component';
import { UseraddreviewComponent } from './useraddreview/useraddreview.component';
import { AddreviewComponent } from './admin/adminaddbooks/user/registration/addreview/addreview.component';

import { NgxStarRatingModule } from 'ngx-star-rating';
import { BehaviourserviceService } from './core/behaviourservice.service';
import { ResolveGuard } from './resolve.guard';




@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
      AdminloginComponent,
      HeaderComponent,
      AdminaddbooksComponent,
      LoginComponent,
      RegistrationComponent,
      AdminviewreviewComponent,
      UseraddreviewComponent,
      AddreviewComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxStarRatingModule
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [BehaviourserviceService,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
