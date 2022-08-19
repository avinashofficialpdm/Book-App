import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../core/book.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
 
  get validate(){
     return this.adminloginform.controls

  }


  data:any;
  mydata:any;
  adminlogin:Boolean=false;


  constructor(private fb:FormBuilder,private bs:BookService,private route:Router) { }

adminloginform=this.fb.group({
  username:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
  password:['',[Validators.required]]
})
  ngOnInit() {
  }
  // adminLogin(){
  //   this.bs.adminLogin().subscribe((res:any)=>{
  //     this.data=res
  //     this.data.forEach((item:any)=>{
  //       if(item.username==this.adminloginform.value.username && (item.password==this.adminloginform.value.password)){
  //               console.log("Login Successful");
           
                
  //       }
  //       else{
  //         console.log("please LogIn");
          
  //       }
  //     })
     
  //   })
  // }



  adminLogin(){
    this.bs.adminLogin().subscribe(res=>{
      this.data=res
      this.mydata=this.data.find((user:any)=>user.role=='admin')
      console.log(this.mydata);
      
      if(this.mydata.username==this.adminloginform.value.username && this.mydata.password == this.adminloginform.value.password){
        alert("login successsful.....")
        localStorage.setItem('adminlogin','adminLogin')
        this.route.navigateByUrl('home')

      }
      else{
        alert("Invalid..please login...")
      }
    })

  }

 

}
