import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResetpwService {
  userr !: User ; 
  //usernew !: User;
  apiURL="http://localhost:8081";
  geturl = "http://localhost:8081/getbymail";
  

  constructor(private http : HttpClient) { }
  getVerfifPwd(id: string):Observable<any>  {
    const url = `${this.apiURL}/${id}`;
   
    return this.http.get(url);
    }
  
    getMail(email :string): Observable<any>{
      return this.http.get("http://localhost:8081/getbymail/"+email);
      }
  

}
