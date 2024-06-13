import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiroot:any='http://localhost:8000/'

  constructor(private http:HttpClient) { }
  data:any=""
  api_gett(url:any){
    console.log(url)
    this.http.get(this.apiroot+url).subscribe((data)=>{
      console.log(data);
      return data
    })
  }

  api_get(url:any): Observable<any> {
    return this.http.get(this.apiroot+url);
  }
  
  api_post(url:string,data:any):Observable<any>{
    return this.http.post(this.apiroot+url,data);
  }

  api_edit(url:string,regno:any):Observable<any>{
    return this.http.post(this.apiroot+url,regno);
  }

  api_delete(url:string,regno:any):Observable<any>{
    return this.http.post(this.apiroot+url,regno)
  }

}
