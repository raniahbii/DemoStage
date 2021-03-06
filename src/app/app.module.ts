import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ErreurComponent } from './erreur/erreur.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ResetPasswordComponent,
  
    ErreurComponent,
       ForgotpwdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
