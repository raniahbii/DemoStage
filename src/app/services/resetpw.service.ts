import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class ResetpwService {
  apiURL="http://localhost:8081";

  constructor(private http : HttpClient) { }
  getVerfifPwd(id: string)  {
    const url = `${this.apiURL}/${id}`;
    console.log(id);
    console.log(this.http.get(url));
    return this.http.get(url);
    }
}
