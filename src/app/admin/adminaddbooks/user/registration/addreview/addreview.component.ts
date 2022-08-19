import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  currentid:any
   data:any
   book:any

   result:any

  // data:any[]=[]

  constructor(private bs:BookService,private route:ActivatedRoute,private fb:FormBuilder) { }


  reviewform=this.fb.group({
    rating: [''],
     comments:['']
  })

  ngOnInit() {
     this.currentid=this.route.snapshot.paramMap.get("id")
     this.currentid=JSON.parse(this.currentid)
     console.log(this.currentid);
     
     this.bs.getbookDetails(this.currentid).subscribe((res:any)=>{
       this.data=res
       console.log(this.data);
       
     })
  
  }


  addReview(){
  //  let review=this.reviewform.value
  let data={"uid":localStorage.getItem('userloggedin'),"comments":this.reviewform.value.comments,"rating":this.reviewform.value.rating}
  console.log(data);
  this.bs.addReview().subscribe((res:any)=>{
    this.book=res
    console.log(this.book);
   let reviewbook= this.book.find((element:any)=>element.id==this.currentid)
   console.log(reviewbook);
 reviewbook.review.push(data)
  
   
   console.log(reviewbook);
   
   this.bs.submitReview(this.currentid,reviewbook)
   alert("Added Successfully")
  })
  
   
  //  this.bs.addReview(review)
  }


  

}
