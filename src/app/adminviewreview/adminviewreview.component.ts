import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookService } from '../core/book.service';
import { bookdetails } from '../models/bookdetails';
import { ratingdetails } from '../models/ratingdetails';

@Component({
  selector: 'app-adminviewreview',
  templateUrl: './adminviewreview.component.html',
  styleUrls: ['./adminviewreview.component.css']
})
export class AdminviewreviewComponent implements OnInit {
  result:ratingdetails[]=[]
// result:ratingdetails|undefined
 currentbookid?:string|null

  constructor(private bs:BookService,private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.currentbookid=this.route.snapshot.paramMap.get("id")
    //  this.currentbookid=JSON.parse(this.currentbookid)
     console.log(this.currentbookid);
     this.bs.getReview(this.currentbookid).subscribe((res:any)=>{
       this.result=res.review
       console.log(this.result);
       
     })
     

    
  }

}
