package com.tasktracker.services;

import com.tasktracker.entity.Tasks;
import com.tasktracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public  Tasks createTask(Tasks newTask)
    {
        Tasks addedTask=taskRepository.save(newTask);
        return addedTask;
    }

    public  List<Tasks> viewAllTasks() {
        try {
            List<Tasks> allTasks = taskRepository.findAll();
            return allTasks;
        }
        catch(Exception e){
              throw new RuntimeException("Exception Occurred!! "+e.getMessage());

        }
    }
    public void deleteTask(Long id)
    {
        try {
            taskRepository.deleteById(id);
        }
        catch (Exception e)
        {
            throw new RuntimeException("Error!!" +e.getMessage());
        }
    }

    public Tasks findTasksById(Long id)
    {
        Tasks task=taskRepository.findById(id).orElse(null);
        return task;
    }

    public Tasks updateTask(Long Id,Tasks newTask)
    {
        Tasks task=taskRepository.findById(Id).orElse(null);
        if(task!=null)
        {
            task.setTask(newTask.getTask());
            task.setDueDate(newTask.getDueDate());
            task.setPriority(newTask.getPriority());
            task.setStatus(newTask.getStatus());
            Tasks updatedTask=taskRepository.save(task);
            return updatedTask;

        }
        else
            throw new RuntimeException("No Task with given  id!!");

    }



}
