import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AddPolicyComponent } from './addpolicy';
import { PolicyDetailsComponent } from './policydetails'
import { PaymentComponent } from './payment';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addpolicy', component: AddPolicyComponent },
    { path: 'policydetails', component: PolicyDetailsComponent },
    { path: 'payment', component: PaymentComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);