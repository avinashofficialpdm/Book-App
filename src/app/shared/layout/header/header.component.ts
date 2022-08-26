import { Component, OnInit } from '@angular/core';
import { BehaviourserviceService } from 'src/app/core/behaviourservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 countbook?:number
 adminlogin:boolean=false
  userloggedin:boolean=false
  constructor(private behs:BehaviourserviceService) { }

  ngOnInit() {
    this.behs.behaviorsubjectBook.subscribe((number)=>{this.countbook=number})

    
    if(localStorage.getItem('adminlogin')){
      this.adminlogin=true
    }

    if(localStorage.getItem('userloggedin')){
      this.userloggedin=true
    }

  }

}
