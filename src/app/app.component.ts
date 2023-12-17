import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskComponent } from './pages/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SignupComponent,
    LoginComponent,
    TaskComponent,
  ],
  template: `<app-task />`,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  title = 'todo';
}
