import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';


@NgModule({
  declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
      RouterModule.forChild(HomeRoutes),
      ReactiveFormsModule,
      CommonModule
    ],

  })
  export class HomeModule { }
