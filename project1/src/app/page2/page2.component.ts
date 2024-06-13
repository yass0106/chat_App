import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit{
  ngOnInit(): void {
   console.log("no error");
  
  }
      sname=""
      sRegno=""
      sub1=""
      sub2=""
      sub3=""
      sub4=""
      sub5=""
      sub6=""
      studentdetails:any=[
        {"Sno": 1, "student_name": "John Doe", "sRegno": 10, "sub1": 45, "sub2": 50, "sub3": 55, "sub4": 60, "sub5": 65, "sub6": 70},
    {"Sno": 2, "student_name": "Jane Smith", "sRegno": 20, "sub1": 55, "sub2": 60, "sub3": 65, "sub4": 70, "sub5": 75, "sub6": 80},
    {"Sno": 3, "student_name": "Emily Davis", "sRegno": 30, "sub1": 65, "sub2": 70, "sub3": 75, "sub4": 80, "sub5": 85, "sub6": 90},
    {"Sno": 4, "student_name": "Michael Brown", "sRegno": 40, "sub1": 75, "sub2": 80, "sub3": 85, "sub4": 90, "sub5": 95, "sub6": 100},
    {"Sno": 5, "student_name": "Jessica Wilson", "sRegno": 50, "sub1": 85, "sub2": 90, "sub3": 95, "sub4": 100, "sub5": 105, "sub6": 110},
    {"Sno": 6, "student_name": "David Martinez", "sRegno": 60, "sub1": 40, "sub2": 45, "sub3": 50, "sub4": 55, "sub5": 60, "sub6": 65},
    {"Sno": 7, "student_name": "Sarah Lee", "sRegno": 70, "sub1": 50, "sub2": 55, "sub3": 60, "sub4": 65, "sub5": 70, "sub6": 75},
    {"Sno": 8, "student_name": "Daniel Garcia", "sRegno": 80, "sub1": 60, "sub2": 65, "sub3": 70, "sub4": 75, "sub5": 80, "sub6": 85},
    {"Sno": 9, "student_name": "Laura Rodriguez", "sRegno": 90, "sub1": 70, "sub2": 75, "sub3": 80, "sub4": 85, "sub5": 90, "sub6": 95},
    {"Sno": 10, "student_name": "Chris Johnson", "sRegno": 100, "sub1": 80, "sub2": 85, "sub3": 90, "sub4": 95, "sub5": 100, "sub6": 105},
      ]
      edit:boolean=true
      value1=""
      backtoaddbtn:boolean=false

      backtooriginal(){
        this.sname=""
          this.sRegno=""
          this.sub1=""
          this.sub2=""
          this.sub3=""
          this.sub4=""
          this.sub5=""
          this.sub6=""
          this.edit=true
          this.backtoaddbtn=false
      }

      addstudent(){
        length=this.studentdetails.length 
        if(this.sname!=''&& this.sRegno!=''){
          
        this.studentdetails.push({'student_name':this.sname,'sRegno':this.sRegno,'sub1':this.sub1,'sub2':this.sub2,'sub3':this.sub3,'sub4':this.sub4
          ,'sub5':this.sub5,'sub6':this.sub6})
          this.backtooriginal()
           }
           
            
          
          var len=this.studentdetails.length
          if(len==length+1){
          console.log("added successfully");
          }
          else{
            console.log("added Unsuccessfully");
            } 
          }

          countcheck(len:any,count:any){
            if(len==count){
             alert('enter the correct no')
             this.backtooriginal()
           }
          }
        editstudentdetails(regno: any){
          this.backtoaddbtn=true
         console.log(regno,'554545544')
         var count=0 
          if(this.studentdetails.length>0)
            { 
              var len=this.studentdetails.length
              // console.log(len);
              
              for( var i=0;i<len;i++){
            if(this.studentdetails[i].sRegno == regno){
              console.log(regno) 
           
            this.edit=false
            this.sRegno =this.studentdetails[i].sRegno
            this.sname=this.studentdetails[i].student_name
            this.sub1=this.studentdetails[i].sub1
            this.sub2=this.studentdetails[i].sub2
            this.sub3=this.studentdetails[i].sub3
            this.sub4=this.studentdetails[i].sub4
            this.sub5=this.studentdetails[i].sub5
            this.sub6=this.studentdetails[i].sub6 
            break
            }
            else if(this.studentdetails[i].sRegno != regno){    
              count++ 
            this.countcheck(len,count)
            }
          }
        }
        else{
          alert('no student data is available')
        }
        }

        updatestudentdetails(regno:any){
          console.log(regno)
          var len=this.studentdetails.length
          for( var i=0;i<len;i++){
            console.log(this.studentdetails[i].sRegno == regno)
            console.log(this.studentdetails[i].sRegno,regno)
            if(this.studentdetails[i].sRegno == regno){
              console.log("regno")
            this.studentdetails[i].student_name=this.sname
            this.studentdetails[i].student_name=this.sRegno
            this.studentdetails[i].sub1=this.sub1
            this.studentdetails[i].sub2=this.sub2
            this.studentdetails[i].sub3=this.sub3
            this.studentdetails[i].sub4=this.sub4
            this.studentdetails[i].sub5=this.sub5
            this.studentdetails[i].sub6=this.sub6
            alert("updated")
            this.backtooriginal()
            break
            }
            // else{
            //   alert("error")
            //   break
            // }
          }
        }



        check(){
          console.log(this.studentdetails);
          
        }
        
        backtoadd(){
          this.backtooriginal()

        }
}

        
