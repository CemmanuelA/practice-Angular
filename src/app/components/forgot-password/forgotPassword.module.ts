import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgotPassword.component';
import forgotPasswordRoutes from './forgotPassword.routing';

@NgModule({
    declarations: [ ForgotPasswordComponent ],
    imports: [
               SharedModule,
               RouterModule.forChild(forgotPasswordRoutes)
             ],
})

export class ForgotPasswordModule {}
