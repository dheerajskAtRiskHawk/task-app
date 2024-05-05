import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() taskCreated = new EventEmitter<Task>();
  newTask: Task = { id: 0, title: '', description: '', status: 'todo' };

  createTask() {
    this.taskCreated.emit(this.newTask);
    this.newTask = { id: 0, title: '', description: '', status: 'todo' };
  }
}
