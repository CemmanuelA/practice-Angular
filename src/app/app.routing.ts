import { Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/signUp.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgotPassword.component';
import { AuthGuard } from './components/guards/auth.guards';

const appRoutes: Routes = [
    { path: 'login', loadChildren: () => import ('./components/login/login.module').then(mod => mod.LoginModule)  },
    { path: 'home',
            canLoad: [AuthGuard],
            loadChildren: () => import ('./components/home/home.module').then(mod => mod.HomeModule)},
    { path: 'sign-up', loadChildren: () => import ('./components/sign-up/signUp.module').then(mod => mod.SignUpModule)},
    { path: 'forgot-password', loadChildren: () => import ('./components/forgot-password/forgotPassword.module').then(mod => mod.ForgotPasswordModule)},
    { path: '', pathMatch: 'full', redirectTo: 'login'}
];

export default appRoutes;
