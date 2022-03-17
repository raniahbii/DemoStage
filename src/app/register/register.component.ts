import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { RegisterService } from '../services/register.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 newUser = new User() ; 
 message !: string ; 
  constructor(private registerser : RegisterService, private route : ActivatedRoute) { }

  ngOnInit(): void {

  }
  addUser(){
    this.registerser.AjouterUser(this.newUser).subscribe(prod => {
    console.log(prod);
  
    });}


}
