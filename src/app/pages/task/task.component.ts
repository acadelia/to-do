import { Component } from '@angular/core';
import { TaskAddComponent } from '../../components/task-add/task-add.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { LogoutComponent } from '../../components/logout/logout.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskAddComponent, TaskListComponent, LogoutComponent],
  template: `<app-logout />
    <app-task-add />
    <app-task-list /> `,
  styleUrl: './task.component.css',
})
export class TaskComponent {}
