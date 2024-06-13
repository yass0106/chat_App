import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent implements OnInit 

{
  ngOnInit(): void {
    console.log('hai');
    this.getstudent()
  }

  // constructor(private http:HttpClient){}
      constructor(private api:DataService){}
  name=""
  regno=""
  dep=""
  year=""
  students:any=''

  clearall(){
    this.name=""
  this.regno=""
  this.dep=""
  this.year=""
  }
  addstudent()
  {
    var data={'name': this.name, 'registerNo':this.regno, 'department':this.dep , 'year' : this.year}
    console.log(data)
    // this.http.post('http://localhost:8000/addstudent/',data).subscribe((data)=>{
    //   alert('added successfully')
    //   this.getstudent() 
    // })
    this.api.api_post('addstudent/',data).subscribe((data:any)=>{
      alert('added successfully')
      this.getstudent() 
      this.clearall()
    })
  }
  getstudent(){
    this.api.api_get('getstudent/').subscribe((data)=>{
      this.students=data
      console.log(this.students)
      })
  }
}
