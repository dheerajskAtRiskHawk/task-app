import { Component } from '@angular/core';
import { Task } from '../task.model';
import * as tasksData from '../../assets/tasks.json';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];

  ngOnInit() {
    console.log(tasksData.tasks)
    this.tasks = tasksData.tasks as []; 
    console.log(tasksData)
  }
}
