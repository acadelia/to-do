import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskComponent } from './pages/task/task.component';

export const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
