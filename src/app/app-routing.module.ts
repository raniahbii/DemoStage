import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ErreurComponent } from './erreur/erreur.component';

const ROUTES : Routes = [
  {path:'', component : RegisterComponent },
  {path:'resetpw/:id', component : ResetPasswordComponent },
  {path:'echec', component :ErreurComponent }

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
