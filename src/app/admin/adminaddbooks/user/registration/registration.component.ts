import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  get validate(){
    return this.registerform.controls
  }

  constructor(private fb:FormBuilder,private bs:BookService,private route:Router) { }

  registerform=this.fb.group({
    name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    username:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
    password:['',[Validators.required]]
  })

  ngOnInit() {
  }


 







  userRegistration(){
    // this.bs.userRegistration(this.registerform.value)

    this.bs.userRegistration(this.registerform.value).subscribe((res)=>{
      alert("Registration Successful")
      this.route.navigateByUrl('userlogin')
    })
  }

}
