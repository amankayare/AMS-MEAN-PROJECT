import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FloginComponent } from './flogin/flogin.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';
import { DefaultComponent } from './default/default.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UploadAttendenceComponent } from './upload-attendence/upload-attendence.component';


@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,

    RegistrationPageComponent,

    LoginPageComponent,

    PageNotFoundComponent,

    FloginComponent,

    AllStudentComponent,

    AddStudentComponent,

    ProfileComponent,

    ViewAttendenceComponent,

    DefaultComponent,

    AddCourseComponent,

    UploadAttendenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
