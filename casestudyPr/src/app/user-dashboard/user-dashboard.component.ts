import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
message:any;
error:string;
isLoading:Boolean;
  product: any;
constructor(){}
  ngOnInit(): void {
    console.log("i am user details")
  }

  onSubmit(form:NgForm){
  this.isLoading =true; 
   this.product.onRegister(form.value).subscribe((res) => {
     this.isLoading = false;
     this.message = res.message;
     form.reset();
   },err => {
     this.isLoading = false;     
     this.error = "Something went wrong"
   })
  }
}
