import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

    const routes: Routes = [
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule'
    },
    {
        path: '',
        loadChildren: './components/login/login.module#LoginModule',
    },
    {
        path: 'register',
        loadChildren: './components/register/register.module#RegisterModule'
    }
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }