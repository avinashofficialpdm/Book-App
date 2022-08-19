import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
 

  constructor(private route:Router){}
  canActivate():any{

    if(localStorage.getItem('adminlogin')){
      return true

    }
    else{
      alert('please login')
      this.route.navigateByUrl('adminlogin')
    }
    
  }
    

  
  
  
}
