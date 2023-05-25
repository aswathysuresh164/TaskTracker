import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertdialogComponent } from '../alertdialog/alertdialog.component';
import { Task } from '../task';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dialogRef!: MatDialogRef<any>;
  taskCreationVisible: boolean = false;
  showViewTasks: boolean = false;
  actionVisible: boolean = false;
  btnvisible: boolean = true;
  todoForm!: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      task: ['', Validators.required],
      dueDate: [''],
      priority: ['']
    });
  }

  showTaskCreation() {
    this.taskCreationVisible = true;
    this.showViewTasks = true;
    this.actionVisible = true;
    this.btnvisible = false;
  }

  get task() {
    return this.todoForm.get('task');
  }

  isFormValid() {
    const formControls = this.todoForm.controls;
    for (const controlName in formControls) {
      if (
        formControls.hasOwnProperty(controlName) &&
        formControls[controlName].value === ''
      ) {
        return false;
      }
    }
    return true;
  }

  openAlert() {
    this.dialogRef = this.dialog.open(AlertdialogComponent, {
      width: '300px', // Customize the width as per your needs
      data: { message: 'Please fill all fields.' } // Pass any additional data to the dialog
    });
  }

  
  onSubmit() {
    if (!this.isFormValid()) {
      this.openAlert();
    } else {
      console.log(this.todoForm.value);
      this.taskService.addTasks(this.todoForm.value).subscribe(
        (data: Task) => {
          // alert('Data added successfully!');
          this.dialogRef = this.dialog.open(AlertdialogComponent, {
            width: '400px', // Customize the width as per your needs
            data: { message: 'New Task Added !!' } // Pass any additional data to the dialog
          });
          this.todoForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          alert('Error occurred while adding data.');
        }
      );
    }
  }



  showTasks() {
    this.router.navigate(['/view-tasks']);
  }
}
