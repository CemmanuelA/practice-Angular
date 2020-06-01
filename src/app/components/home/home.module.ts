import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import homeRoutes from './home.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [
               SharedModule,
               RouterModule.forChild(homeRoutes)
             ],
})

export class HomeModule {}
