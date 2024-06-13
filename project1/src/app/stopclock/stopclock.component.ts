import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stopclock',
  templateUrl: './stopclock.component.html',
  styleUrl: './stopclock.component.css'
})
export class StopclockComponent implements OnInit{
     
    
      constructor(private router: Router) { }
    
      ngOnInit(): void {

      }

      button=""
      input=""
      key=""
      code=""
      keycode=""
      // check(){
      //   if(this.input==""){
      //     this.button="Please enter a number"
      //   }
      //   else{
      //   this.router.navigate(['/page1']);
      //     }
      // }
    keyuse($event: any){
      this.key=$event.key
      this.code=$event.code
      this.keycode=$event.keyCode
      console.log($event)
    }
}
