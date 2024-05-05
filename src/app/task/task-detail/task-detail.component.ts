import { Component } from '@angular/core';
import { Task } from '../task.model';
import { ActivatedRoute } from '@angular/router';
import * as TasksSource from "../../../assets/tasks.json";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {

  task!: Task;
  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      const id = params["id"];
      this.task = TasksSource.tasks.find(i => i.id == Number(id)) as Task;
    })
   
  }
} 
