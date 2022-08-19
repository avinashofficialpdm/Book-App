import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviourserviceService } from 'src/app/core/behaviourservice.service';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
   

  
  adminlogin:boolean=false
  userloggedin:boolean=false

  constructor(private bs:BookService,private route:Router,private bhs:BehaviourserviceService) { }

  ngOnInit() {
    this.bs.getBooks().subscribe((item:any)=>{
      this.data=item
      console.log(this.data);
      this.bhs.bookCount(this.data.length)
    })


  

  




    if(localStorage.getItem('adminlogin')){
      this.adminlogin=true
    }

    if(localStorage.getItem('userloggedin')){
      this.userloggedin=true
    }


    
  }
  deleteBooks(id:number){
    console.log(id);
    
    this.bs.deleteBooks(id)
    alert("successfully deleted")
    window.location.reload()
 
   

  }
  // adminLogout(){
  //   localStorage.removeItem('adminlogin')
  //   this.route.navigateByUrl()
  // }

  adminLogout(){
    localStorage.removeItem('adminlogin')
    this.route.navigateByUrl('/home')
    window.location.reload()
  }


  userLogout(){
    localStorage.removeItem('userloggedin')
    this.route.navigateByUrl('/home')
    window.location.reload()
  }


 
}

