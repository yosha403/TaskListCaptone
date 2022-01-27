import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }  

  ngOnInit() {
  }

  CreateTask() {
    let taskName: string = (<HTMLInputElement>document.getElementById("taskName")).value;
    console.log(taskName);
    let taskDescription: string = (<HTMLInputElement>document.getElementById("taskDescription")).value;
    console.log(taskDescription);
    let assignedTo: string = (<HTMLInputElement>document.getElementById("assignedTo")).value;
    console.log(assignedTo);
    let dueDate: Date = (<HTMLInputElement>document.getElementById("dueDate")).valueAsDate;
    console.log(dueDate);
    let isCompleted: boolean = Boolean.call(<HTMLInputElement>document.getElementById("isCompleted")).value;
    console.log(isCompleted);

    let newTask: Task = { Id: 0, taskName: taskName, taskDescription: taskDescription, assignedTo: assignedTo, dueDate: dueDate, isCompleted: isCompleted };    
    this.taskService.CreateTask(newTask).subscribe(
      (response: any) => { location.reload() }
    );
  }

}
