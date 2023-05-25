import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';

import { MatSelectModule } from '@angular/material/select';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
import { ViewtasksComponent } from './viewtasks/viewtasks.component';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertdialogComponent,
    ViewtasksComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
