import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../../core/guards/auth.acivate';
import { NonAuthActivated } from 'src/app/core/guards/nonAuth.activate';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthActivated]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthActivated]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }