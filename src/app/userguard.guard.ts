import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():any{
    if(localStorage.getItem('userloggedin')){
      return true
    }
    else{
      alert("please login")
      this.route.navigateByUrl('login')
    }

  }
   
  
  
}
