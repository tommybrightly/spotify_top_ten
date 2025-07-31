import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'callback', component: CallbackComponent},
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
