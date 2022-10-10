import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  submit(fname:any,lname:any,age:any,gender:any,email:any,uname:any,pass:any,phone:any){

    const data={
      fname,
      lname,
      age,
      gender,
      email,
      uname,
      pass,
      phone
    }

    console.log("data",data);
    

    return this.http.post('https://dummyjson.com/users/add',data)

  }

  getProduct(){
    return this.http.get('https://dummyjson.com/products')
  }

}
