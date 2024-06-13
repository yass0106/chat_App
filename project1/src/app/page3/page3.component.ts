import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expression } from '@angular/compiler';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component implements OnInit{

    name=""
    regno=""
    dep=""

    demo:any=""

  constructor(private http:HttpClient ){}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.get()
  }

    // add(){
    //   console.log(this.name,this.regno,this.dep)
    // }

    get(){
      this.http.get('http://localhost:8000/').subscribe(
        (data)=>{
            console.log(data);
            this.demo=data;
        }
      )
    }
    add(){
     var sendvalue={
          'name' : this.name, 'registerNo':this.regno,'department':this.dep
      }
      this.http.post('http://localhost:8000/add/',sendvalue).subscribe((data)=>{
            console.log(data)
      })
      console.log(sendvalue)
      this.ngOnInit()
    }
    delete(regno:any){
      var Regno={'registerNo':regno}
      console.log(Regno);
      
      this.http.post('http://localhost:8000/delete/',Regno).subscribe(
        (data)=>{
          console.log(data)
          this.ngOnInit()
        }
      )
    }
    
}
