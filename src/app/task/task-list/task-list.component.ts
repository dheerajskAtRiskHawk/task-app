import { Component } from '@angular/core';
import { Task } from '../task.model';
import * as tasksData from '../../../assets/tasks.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(private route: ActivatedRoute){

  }

  tasks: Task[] = [];

  ngOnInit() {
    // const status = this.route.snapshot.queryParamMap.get('status');
    this.route.queryParams.subscribe((params)=>{
      const status = params["status"];
      console.log(status)  
      if(status){
        this.tasks = tasksData.tasks.filter(i => i.status == status) as Task[]
      } else {
        this.tasks = tasksData.tasks as Task[]

      }
     
    })

    console.log(status);

    console.log(tasksData.tasks)
    console.log(tasksData)
  }
}
