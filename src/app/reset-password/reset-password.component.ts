import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetpwService } from '../services/resetpw.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  id !: string ; 
  token : string = this.route.snapshot.params['id'] ;
  constructor(private route : ActivatedRoute,
    private reserpwser : ResetpwService,
     private router : Router) { }

  ngOnInit(): void {


//this.id = this.route.snapshot.params['id'] ;
//this.reserpwser.getVerfifPwd(this.route.snapshot.params['id']).subscribe();
// };



 //   if (this.reserpwser.getVerfifPwd(this.route.snapshot.params['id'])===true){
   // return this.router.navigate['/resetpw/:id'];
        
   // }
    //else { return this.router.navigate[''];}
    
  

  }


}



