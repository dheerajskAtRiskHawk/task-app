import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { TaskContainerComponent } from './task-container/task-container.component';
import { RouterModule } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  declarations: [TaskListComponent, NewTaskComponent, TaskContainerComponent, TaskDetailComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [TaskListComponent, TaskContainerComponent]
})
export class TaskModule { }