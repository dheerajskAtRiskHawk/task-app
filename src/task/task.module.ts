import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskListComponent, NewTaskComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [TaskListComponent]
})
export class TaskModule { }
