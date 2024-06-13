import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrl: './deletestudent.component.css'
})
export class DeletestudentComponent {

  constructor(private api:DataService){}
  regno=""
  delete(regno:any){
    var data={'registerNo':this.regno}
    this.api.api_delete('deletestudent/',data).subscribe((data)=>{  
          console.log(data)
          this.regno=""
    })
  }
}
