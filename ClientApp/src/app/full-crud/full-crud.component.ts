import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'],
  providers: [TaskService]
})
export class FullCrudComponent implements OnInit {

  tasks?: Task[] = [];
  constructor(private taskService: TaskService) {    
    this.taskService.GetTaskList().subscribe(    
      (response: any) => { this.tasks = response }
    )
  }

  ngOnInit() {
  }

  DeleteEntry(id: number, index: number) {
    this.taskService.DeleteTask(id).subscribe(
      (response: any) => {
        console.log(id + " was deleted successfully from our database");        
        this.tasks.splice(index, 1);
      }
    );
  }

}
