import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService) { }

  regForm = this.fb.group({
    fname:[''],
    lname:[''],
    age:[''],
    gender:[''],
    email:[''],
    uname:[''],
    pass:[''],
    phone:['']
  })

  ngOnInit(): void {
  }

  submit(){

    var fname=this.regForm.value.fname
    var lname=this.regForm.value.lname
    var age=this.regForm.value.age
    var gender=this.regForm.value.gender
    var email=this.regForm.value.email
    var uname=this.regForm.value.uname
    var pass=this.regForm.value.pass
    var phone=this.regForm.value.phone
   
   this.ds.submit(fname,lname,age,gender,email,uname,pass,phone).subscribe((result)=>{
    if(result){
      alert("Registered")
      console.log(result);
      
    }
    },
   result=>{
    alert("Error")
  }
  )


  }

}
