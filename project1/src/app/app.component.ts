
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
// import { fromEvent, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'project1';implements OnInit,OnDestroy

  // showError: boolean = false;
  // private unsubscriber: Subject<void> = new Subject<void>();

  constructor( private router:Router) { }

  // ngOnInit(): void {
  //   history.pushState(null, '');

  //   fromEvent(window, 'popstate')
  //     .pipe(takeUntil(this.unsubscriber))
  //     .subscribe((_) => {
  //       history.pushState(null, '');
  //       // this.showError = true;
  //         alert("You can't go back at this time.!")
        
  //     });
  // }
  // uname=""
  // password=""
  condition:boolean=true
  hidevalue:boolean=true
  // login(){
  //   if(this.uname=="admin" && this.password=="admin"){
  //     alert("Login Successfull")
  //     this.condition=true
  //     this.router.navigate(['/dashboard'])
  //   }
  // }
  logout(){
    console.log('logout');
    this.condition=false
    this.router.navigate(['/'])
  }
  hide(){
    this.hidevalue=!this.hidevalue
  // console.log(this.hidevalue);
  
  }
  // ngOnDestroy(): void {
  //   this.unsubscriber.next();
  //   this.unsubscriber.complete();
  // }
}
