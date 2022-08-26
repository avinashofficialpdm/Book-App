import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-adminaddbooks',
  templateUrl: './adminaddbooks.component.html',
  styleUrls: ['./adminaddbooks.component.css']
})
export class AdminaddbooksComponent implements OnInit {

imgurl?:string

  constructor(private fb:FormBuilder,private bs:BookService,private route:Router) { }

  addbooks=this.fb.group({
    img:[''],
    name:['',[Validators.required]],
    author:['',[Validators.required]],
    review:[[]]

  })

  ngOnInit() {
  }



  onSelectfile(event:any){
    if(event.target.files){
      let reader=new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>{
        this.imgurl=event.target.result
      }
    }

  }

  addBooks(){

    this.addbooks.value.img=this.imgurl
    let book=this.addbooks.value
    book.review=[]
    console.log(book);
    
    this.bs.addBooks(book)
    console.log(book);
    
     this.route.navigateByUrl("home")
    // window.location.reload();
    alert("Successfully Added")
    
    
  }

}
