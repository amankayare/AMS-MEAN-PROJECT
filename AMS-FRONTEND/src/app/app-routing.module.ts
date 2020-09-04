import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
  { path: 'flogin', component: FloginComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DefaultComponent },
      { path: 'addStudent', component: AddStudentComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'viewAttendence', component: ViewAttendenceComponent },
      { path: 'allStudent', component: AllStudentComponent },
      { path: 'addCourse', component: AddCourseComponent },
      { path: 'uploadAttendence', component: UploadAttendenceComponent },
    
    ],
  },
  { path: '', redirectTo: '/flogin', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
