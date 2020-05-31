import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';


@NgModule({
  declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
      RouterModule.forChild(LoginRoutes),
      CommonModule
    ]
  })
  export class LoginModule { }
