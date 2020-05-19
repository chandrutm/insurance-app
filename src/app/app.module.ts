    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    // import { AppRoutingModule } from './app-routing.module';
    // import { AppComponent } from './app.component';
    import { ReactiveFormsModule }    from '@angular/forms';
    import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
    import { HeaderComponent } from './header/header.component';
    import { FooterComponent } from './footer/footer.component';
    import { RegisterComponent } from './register/register.component';
    import { AddPolicyComponent } from './addpolicy/addpolicy.component';
    import { PolicyDetailsComponent } from './policydetails/policydetails.component';

    // used to create fake backend
    import { fakeBackendProvider } from './_helpers';

    import { AppComponent }  from './app.component';
    import { routing }        from './app.routing';

    import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
    import { HomeComponent } from './home';
    import { LoginComponent } from './login';

    @NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddPolicyComponent,
    PolicyDetailsComponent
    ],

    imports: [
    BrowserModule,
    ReactiveFormsModule,
    //AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing
    ],
    
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],

    bootstrap: [AppComponent]
    })
    export class AppModule { }