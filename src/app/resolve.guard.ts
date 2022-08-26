import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from './core/book.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
constructor(private bs:BookService){

}
resolve(){
  return this.bs.getBooks()

}
  
}
