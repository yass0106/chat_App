
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
DataService
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css'
})
export class EditstudentComponent implements OnInit {



    constructor(public api:DataService) { }

  ngOnInit(): void {
    this.editstudent()
  }
  students:any=[]
  name=""
  regno=""
  dep=""
  year=""
  search=""
  // edit:boolean=false

  clearall(){
    this.name=""
  this.regno=""
  this.dep=""
  this.year=""
  }
  editstudent(){
    // if(this.search==""){
      this.api.api_get('getstudent/').subscribe((data)=>{
      this.students=data
      console.log(data);
      
    })
    // }
    // else{
    //   alert('hai')
    // }
    
  }

  editedstudentdata(regno:any){
    // this.edit=true
    console.log(regno)
    for(var i=0;i<this.students.length;i++)
      {
        if(this.students[i].registerNo==regno)
          {
            this.name=this.students[i].name
            this.regno=this.students[i].registerNo
            this.dep=this.students[i].department
            this.year=this.students[i].year
          }
      }
  }

  change(){
    // this.edit=false
   var data={'name':this.name,'registerNo':this.regno,'department':this.dep,'year':this.year}
    this.api.api_edit('editstudent/',data).subscribe((data)=>{
      console.log(data)
    })
    this.clearall()
    alert("edited successfully")
    this.editstudent()
  }

  close(){
    // this.edit=false
    this.clearall()
  }
}
