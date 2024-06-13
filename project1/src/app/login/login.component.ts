import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( private router:Router) { }

  uname=""
  password=""
  login(){
    if(this.uname=="admin" && this.password=="admin"){
      alert("Login Successfull")
      this.router.navigate(['/dashboard',{'name':this.uname}])
    }
  }
}
