import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './signUp.component';
import signUpRoutes from './signUp.routing';

@NgModule({
    declarations: [ SignUpComponent ],
    imports: [
               SharedModule,
               RouterModule.forChild(signUpRoutes)
             ],
})

export class SignUpModule {}
