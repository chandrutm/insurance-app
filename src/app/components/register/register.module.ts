import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routes';

@NgModule({
  declarations: [RegisterComponent],
    exports: [RegisterComponent],
    imports: [
      RouterModule.forChild(RegisterRoutes),
      CommonModule
    ]
  })
  export class RegisterModule { }
