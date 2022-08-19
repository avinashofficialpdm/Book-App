import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourserviceService {
 
  public behaviorsubjectBook=new BehaviorSubject<number>(0)

constructor() { }

bookCount(data:any){
  console.log(data);
  
  this.behaviorsubjectBook.next(data)

}

}
