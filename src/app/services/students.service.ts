import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http'
import{Observable} from 'rxjs'
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = 'http://localhost:3000/Students/'

  constructor( private http:HttpClient)  { }

  getStudents(){
    return this.http.get<any>(this.apiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))

  }
}
