import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './commponents/login/login.component';
import { RegisterFormComponent } from './commponents/register-form/register-form.component';
import { UserComponent } from './commponents/user/user.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent, },
  { path: 'user', component: UserComponent, canActivate: [AuthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
