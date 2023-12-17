import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskStatus: boolean = false;

  constructor(private taskService: TaskService) {}

  addTask() {
    const newTaskId =
      this.tasks.length > 0 ? Math.max(...this.tasks.map((t) => t.id)) + 1 : 1;
    const newTask = new Task(newTaskId, this.newTaskTitle, this.newTaskStatus);

    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks();

    this.newTaskTitle = '';
  }
}
 