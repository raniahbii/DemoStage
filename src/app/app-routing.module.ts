import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SpinnerComponent } from './spinner/spinner.component';

const ROUTES : Routes = [
  {path:'', component : RegisterComponent },
  {path:'nvmdp', component : ResetPasswordComponent },
  {path:'resetpw/:id' , component: SpinnerComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
