import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})
export class ViewtasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private router: Router, private taskService: TaskService, private http: HttpClient) {}

  ngOnInit() {
    this.refresh();
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task) {
    task.isEditing = false;
    this.taskService.updateTask(task,task.id).subscribe(
      (response)=>
      {
        
        console.log("update success!!");
        this.refresh();
      },
      (error)=>
      {
        console.log(error);
      }
    );
   
  }

  refresh() {
    this.taskService.getAllTasks().subscribe(
      (response: Task[]) => {
        console.log(response);
        this.tasks = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      (response) => {
        this.refresh();
      },
      (error) => {
        this.refresh();
      }
    );
  }

  AddVisible: boolean = true;

  AddTasks() {
    this.router.navigate(['/home']);
  }
}
