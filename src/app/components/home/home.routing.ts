import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guards';
const homeRoutes: Routes = [
    { path: '', canActivate: [AuthGuard],  component: HomeComponent }
];

export default homeRoutes;
