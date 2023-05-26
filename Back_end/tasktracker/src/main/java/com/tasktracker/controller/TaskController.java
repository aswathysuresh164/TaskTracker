package com.tasktracker.controller;

import com.tasktracker.entity.Tasks;
import com.tasktracker.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin("http://localhost:4200/")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/add")
    public ResponseEntity<Tasks> addTask(@RequestBody Tasks newTask)
    {
        try
        {
           Tasks addedTask= taskService.createTask(newTask);
           return ResponseEntity.status(HttpStatus.CREATED).body(addedTask);

        }
        catch (Exception e)
        {
            e.printStackTrace();
            throw  new RuntimeException(e.getMessage());
        }
    }
    @GetMapping("/view")
    public ResponseEntity<?>  viewAllTasks()
    {
        List<Tasks> Tasks;
        try
        {
            Tasks = taskService.viewAllTasks();
        }
        catch (Exception e)
        {
            return new ResponseEntity<>("Error Occurred!!"+e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<List<Tasks>>(Tasks,HttpStatus.OK);
    }
    @DeleteMapping("/delete-task/{id}")
    public ResponseEntity<?> deleteTaskById(@PathVariable Long id)
    {
       try {
           Tasks task=taskService.findTasksById(id);
           if(task==null)
                 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No data with the Id");

           taskService.deleteTask(task.getId());
           return ResponseEntity.ok().body("Task Deleted Successfully!!");
       }
       catch(Exception e)
       {
           e.printStackTrace();
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete task");
       }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Tasks> updateTask(@PathVariable Long id,@RequestBody Tasks newTask)
    {
        Tasks updatedTask=taskService.updateTask(id,newTask);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTask);
    }


}
