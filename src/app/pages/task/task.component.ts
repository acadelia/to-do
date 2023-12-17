import { Component } from '@angular/core';
import { TaskAddComponent } from '../../components/task-add/task-add.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskAddComponent, TaskListComponent, NavbarComponent],
  template: `<app-navbar />
    <app-task-add />
    <app-task-list /> `,
  styleUrl: './task.component.css',
})
export class TaskComponent {}
