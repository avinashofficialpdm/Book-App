import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http:HttpClient,private router:Router) { }

getBooks(){
  return this.http.get("http://localhost:3000/books")
}
adminLogin(){
  return this.http.get("http://localhost:3000/admin")
}

deleteBooks(id:number){
  this.http.delete('http://localhost:3000/books/'+id).subscribe()
}

addBooks(book:any){
  this.http.post('http://localhost:3000/books',book).subscribe(res=>{console.log(res);
  })


}

userLogin(){
  return this.http.get(" http://localhost:3000/users")
}

userRegistration(user:any){
 return this.http.post('http://localhost:3000/users',user)

// this.http.post('http://localhost:3000/users',user).subscribe({
//   next(){
//     alert("Successfully Registered")

    
//   },
//   error(){
//     console.log(Error);
    
//   }
// })
  
 }




getbookDetails(id:number){


  return this.http.get('http://localhost:3000/books/'+id)
}

getReview(id:number){
  return this.http.get('http://localhost:3000/books/'+id)
}

addReview(){
  return this.http.get('http://localhost:3000/books')
  
}

submitReview(id:number,data:Object){
  console.log(id,data);
  
  this.http.put('http://localhost:3000/books/'+id,data).subscribe((res:any)=>{console.log(res);
  })
}

}