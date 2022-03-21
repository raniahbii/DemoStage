import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { RegisterService } from '../services/register.service';
import { ResetpwService } from '../services/resetpw.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  id !: string ; 
  token : string = this.route.snapshot.params['id'] ;
 // newpassword :any ; 
 public confirmpwd=true;
 confirmpassword !: any ; 
 //newuser = new User();
 public user !: User ;
 password !: string;
 message !: string ; 

  //user !:User
  constructor(private route : ActivatedRoute,
    private reserpwser : ResetpwService,
     private router : Router,
     private registerSer : RegisterService) { }


  ngOnInit(): void {
    this.reserpwser.getVerfifPwd(this.route.snapshot.params['id']).subscribe((data:User)=>{
      if (data){
        this.user=data;
       //console.log(JSON.stringify(data));
       return this.router.navigate(['nvmdp']);
      }
     else {
       return this.router.navigate(['echec']);
      }
     //console.log(localStorage.setItem('data', JSON.stringify(data)));
    
      
    });
    
    
   //this.reserpwser.userr.password=this.newuser.password;

//this.id = this.route.snapshot.params['id'] ;
//this.reserpwser.getVerfifPwd(this.route.snapshot.params['id']).subscribe();
// };



 //   if (this.reserpwser.getVerfifPwd(this.route.snapshot.params['id'])===true){
   // return this.router.navigate['/resetpw/:id'];
        
   // }
    //else { return this.router.navigate[''];}
    
  

  }
UpdatePassword(){

 
  this.user.password=this.password;
  return this.registerSer.updatetUser(this.user).subscribe(data=>console.log(data));
}
 checkPasswordMatch() {
   console.log(this.password);
   console.log(this.confirmpassword);
if (this.password === this.confirmpassword){
  return  this.message = "Passwords match";

}
else return this.message = "Passwords dont match";
}


}


