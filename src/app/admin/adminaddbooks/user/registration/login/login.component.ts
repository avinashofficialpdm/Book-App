import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get validate(){
    return this.userlogin.controls

  }
  data:any;
  myuser:any;

  userlogintoken:boolean=false

  constructor(private fb:FormBuilder,private bs:BookService,private route:Router) { }

  userlogin=this.fb.group({
    username:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
    password:['',[Validators.required]]
  })

  ngOnInit() {



  }

  userLogin(){


    this.bs.userLogin().subscribe((res)=>{
      this.data=res
      console.log(this.data);
      
     this.myuser= this.data.find((user:any)=>user.username==this.userlogin.value.username)
      // console.log(user);
      console.log(this.myuser);
       if(this.myuser.password==this.userlogin.value.password){

        // console.warn("Login Successful...")
     alert("Login Successful...");
     localStorage.setItem('userloggedin',this.myuser.id)
     this.route.navigateByUrl('home')
         
       }
       else{
         alert("Invalid data..Please try Again")
       }
       
    //  })
    })


    // this.bs.userLogin().subscribe(res=>{
    //   this.data=res
    //   // this.mydata=this.data.find((user:any)=>user.role=='user')
    //   console.log(this.mydata);
      
    //   if(this.mydata.username==this.userlogin.value.username && this.mydata.password && this.mydata.password && this.userlogin.value.password){
    //     alert("login successsful.....")
      
    //   }
    //   else{
    //     alert("Invalid..please login...")
    //   }
    // })

  }

  

}
