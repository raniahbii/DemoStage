import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ErreurComponent } from './erreur/erreur.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';

const ROUTES : Routes = [
  {path:'', component : RegisterComponent },
  {path:'resetpw/:id', component : ResetPasswordComponent },
  {path:'echec', component :ErreurComponent },
  {path:'forgotpwd', component :ForgotpwdComponent}

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
