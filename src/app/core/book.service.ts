import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { bookdetails } from '../models/bookdetails';
import { ratingdetails } from '../models/ratingdetails';
import { userdetails } from '../models/userdetails';
import { admindetails } from '../models/admindetails';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http:HttpClient,private router:Router) { }

errorHandler(error:Error){

  alert(error.message)
  return throwError(error.message || "server Error")

}

getBooks(){
  return this.http.get("http://localhost:3000/books").pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
}
adminLogin():Observable<admindetails[]>{
  return this.http.get<admindetails[]>("http://localhost:3000/admin").pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
}

deleteBooks(id:number|undefined):void{
  this.http.delete('http://localhost:3000/books/'+id).subscribe((res:any)=>{console.log(res);
  })
}

addBooks(book:any):void{
  this.http.post('http://localhost:3000/books',book).pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
  .subscribe(res=>{console.log(res);
  })


}

userLogin():Observable<userdetails[]>{
   return this.http.get<userdetails[]>("http://localhost:3000/users").pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
}

userRegistration(user:any){
 return this.http.post('http://localhost:3000/users',user).pipe(catchError(this.errorHandler))
 
//  .pipe((catchError((error)=>{
//   alert("Error Detected")
//   return error
  
  
// })))

// this.http.post('http://localhost:3000/users',user).subscribe({
//   next(){
//     alert("Successfully Registered")

    
//   },
//   error(){
//     console.log(Error);
    
//   }
// })
  
 }




getbookDetails(id:string|null):Observable<bookdetails>{


  return this.http.get<bookdetails>('http://localhost:3000/books/'+id).pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
}

getReview(id:string|null){
  return this.http.get('http://localhost:3000/books/'+id).pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
}

addReview():Observable<bookdetails[]>{
  return this.http.get<bookdetails[]>('http://localhost:3000/books').pipe(catchError(this.errorHandler))

  
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
  
}


// processError(err: any) {
//       let message = '';
//       if (err.error instanceof ErrorEvent) {
//         message = err.error.message;
//       } else {
//         message = `Error Code: ${err.status}\nMessage: ${err.message}`;
//       }
//       console.log(message);
//       return throwError(() => {
//         message;
//       });
//     }
  

submitReview(id:string|null,data:bookdetails|undefined){
  console.log(id,data);
  
  this.http.put('http://localhost:3000/books/'+id,data).pipe(catchError(this.errorHandler))
  // .pipe((catchError((error)=>{
  //   alert("Error Detected")
  //   return error
    
    
  // })))
  .subscribe((res:any)=>{console.log(res);
  })
}

}