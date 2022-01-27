import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TaskService]
})
export class EditTaskComponent implements OnInit {
  @Input() Id: number;
  task: Task;
  constructor(private taskService: TaskService) {
  }
  ngOnInit() {
    this.taskService.GetTask(this.Id).subscribe(
      (response: any) => {
        console.log(response);
        this.task = response;
      }
    );
  }

  UpdateTask(){
    let taskName: string = (<HTMLInputElement>document.getElementById("TaskName"+this.Id)).value;
    console.log(taskName);
    let taskDescription: string = (<HTMLInputElement>document.getElementById("TaskDescription"+this.Id)).value;
    console.log(taskDescription);
    let assignedTo: string = (<HTMLInputElement>document.getElementById("AssignedTo"+this.Id)).value;
    console.log(assignedTo);
    let dueDate: Date = (<HTMLInputElement>document.getElementById("DueDate"+this.Id)).valueAsDate;
    console.log(dueDate);
    let isCompleted: boolean = Boolean.call(<HTMLInputElement>document.getElementById("IsCompleted"+this.Id)).value;
    console.log(isCompleted);

    // let newMovie: Movie = { id: this.Id, title: title, year: year, runtime: runTime, genre: genre };
    // this.movieService.UpdateMovie(newMovie,this.Id).subscribe(
    //   (response:any) =>{location.reload()}
    // );
    
    let newTask: Task = { id: this.Id, taskName: taskName, taskDescription: taskDescription, assignedTo: assignedTo, dueDate: dueDate, isCompleted: isCompleted };

    this.taskService.UpdateTask(newTask,this.Id).subscribe(
      (response: any) => { location.reload() }
    );
  }
}
