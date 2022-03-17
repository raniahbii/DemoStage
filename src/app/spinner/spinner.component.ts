import { Component, OnInit } from '@angular/core';
import { ResetpwService } from '../services/resetpw.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  id !: string ; 
  token : string = this.route.snapshot.params['id'] ;
  test : any ; 
  constructor(private reserpwser : ResetpwService , private route: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
this.reserpwser.getVerfifPwd(this.route.snapshot.params['id']).subscribe(data=>{
  if (data==true){
    return this.router.navigate(['nvmdp']);
  }
  else {
    return this.router.navigate(['']);
  }
});

 
 //console.log(this.test);
    
//this.x=this.reserpwser.getVerfifPwd(this.token);
  //   if (this.x=true){
    //this.router.navigate['/nvmdp'];
        
   // }
    //else {  
      //this.router.navigate[''];}

    

  }

}
  