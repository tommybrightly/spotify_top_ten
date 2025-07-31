import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'callback', component: CallbackComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
