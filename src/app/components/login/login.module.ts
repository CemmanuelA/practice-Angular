import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import loginRoutes from './login.routing';


@NgModule({
    declarations: [ LoginComponent ],
    imports: [ SharedModule, 
               RouterModule.forChild(loginRoutes)],
})

export class LoginModule {}
