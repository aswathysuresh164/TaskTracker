import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})


export class TaskService {



 baseUrl="http://localhost:8080/task"
  constructor(private http: HttpClient) { }
  
  addTasks(data:any):Observable<Task>
  {
    return this.http.post<Task>(`${this.baseUrl}/add`,data);
  }

  getAllTasks():Observable<Task[]>
  {
    console.log(this.http.get<Task[]>(this.baseUrl));
    return this.http.get<Task[]>(`${this.baseUrl}/view`);
  }
  

  deleteTask(id:number)
  {
    return this.http.delete(`${this.baseUrl}/delete-task/${id}`);
  }

  updateTask(task:any,id:number):Observable<any>
  {
      return this.http.put(`${this.baseUrl}/update/${id}`,task);
  }



}
