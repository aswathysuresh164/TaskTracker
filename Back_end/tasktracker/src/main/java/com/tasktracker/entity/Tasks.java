package com.tasktracker.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name="todos")

public class Tasks {
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable=false, updatable=false)
    private Long Id;
    @Column(name="Task")
    private String Task;
    @Column(name="due_date")
    private Date DueDate;
    @Column(name="Priority")
    private String Priority;

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    @Column(name="Status")
    private String Status;

    public Long getId() {
        return Id;
    }

//    public void setId(Long id) {
//        Id = id;
//    }

    public String getTask() {
        return Task;
    }

    public void setTask(String task) {
        Task = task;
    }

    public Date getDueDate() {
        return DueDate;
    }

    public void setDueDate(Date dueDate) {
        DueDate = dueDate;
    }

    public String getPriority() {
        return Priority;
    }

    public void setPriority(String priority) {
        Priority = priority;
    }
}
