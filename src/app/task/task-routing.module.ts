import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskContainerComponent } from "./task-container/task-container.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { RouterModule } from "@angular/router";


const routes = [
    {
        path: '', component: TaskContainerComponent, children: [
            {
                path: '', component: TaskListComponent, children: [
                    {
                        path: ':id', component: TaskDetailComponent
                    }
                ]
            },
            {
                path: 'new', component: NewTaskComponent // localhost:4200/tasks/new
            }
        ]
    }
]

@NgModule({
   imports:[RouterModule.forChild(routes)]
})
export class TaskRoutingModule { }