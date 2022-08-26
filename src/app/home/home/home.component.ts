import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviourserviceService } from 'src/app/core/behaviourservice.service';
import { BookService } from 'src/app/core/book.service';
import { bookdetails } from 'src/app/models/bookdetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // data:any[]=[]
  //  book:any
   bookdetail:bookdetails[]=[]
   bookcount?:number

   rate:any
   currentid:any
 

  
  adminlogin:boolean=false
  userloggedin:boolean=false

  constructor(private bs:BookService,private route:Router,private bhs:BehaviourserviceService,private activatedRoute:ActivatedRoute) { }
 

  ngOnInit() {
    // this.bs.getBooks().subscribe((item:any)=>{
    //   this.data=item
    //   console.log(this.data);
    //   this.bhs.bookCount(this.data.length)
    // })
 
    
    this.bookdetail=this.activatedRoute.snapshot.data['data']


    
    this.bhs.bookCount(this.bookdetail.length)
   


  

  




    if(localStorage.getItem('adminlogin')){
      this.adminlogin=true
    }

    if(localStorage.getItem('userloggedin')){
      this.userloggedin=true
    }


    
  }
  deleteBooks(id:number|undefined){
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

averageRate(data:any){
let avg:number=0
  data.forEach((ele:any)=>{
    avg+=ele.rating


  })
  return avg/data.length

// this.rate=
// console.log(data);

// let rate= data.find((element:any)=>element.id==data.currentid)
// let res=rate.rating
// console.log(res);


// console.log(rate);



//   let rate=data.rating
//   console.log(rate);
  

//  console.log(data);
 

 

//   return 10
  
}
 
}

