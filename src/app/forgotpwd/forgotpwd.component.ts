import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ResetpwService } from '../services/resetpw.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
  user !: User ; 
  email !: string;

  constructor(private resetpwser : ResetpwService) { }

  ngOnInit(): void {
  

  }
  resetpw(){
  this.resetpwser.getMail(this.email).subscribe();
  }
}
