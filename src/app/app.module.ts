    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    // import { AppRoutingModule } from './app-routing.module';
    // import { AppComponent } from './app.component';
    import { ReactiveFormsModule }    from '@angular/forms';
    import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
    import { HeaderComponent } from './header/header.component';
    import { FooterComponent } from './footer/footer.component';
    // import { RegisterComponent } from './register/register.component';
    import { AddPolicyComponent } from './addpolicy/addpolicy.component';
    import { PolicyDetailsComponent } from './policydetails/policydetails.component';
    import { PaymentComponent } from './payment/payment.component';

    // used to create fake backend
    import { fakeBackendProvider } from './_helpers';
    import { AlertService, AuthenticationService, UserService } from './_services';

    import { AppComponent }  from './app.component';
    import { routing } from './app.routing';
    import { AlertComponent } from './_directives';
    import { AuthGuard } from './_guards';

    import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
    import { HomeComponent } from './home';
    import { LoginComponent } from './login';
    import { RegisterComponent } from './register';

    @NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddPolicyComponent,
    PolicyDetailsComponent,
    PaymentComponent
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
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],

    bootstrap: [AppComponent]
    })
    export class AppModule { }