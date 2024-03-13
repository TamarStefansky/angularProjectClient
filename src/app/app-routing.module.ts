import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { RegisterComponent } from './modules/login/register/register.component';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { AddCourseComponent } from './modules/course/add-course/add-course.component';
import { ExsistUserService } from './services/exsistUser.service';
import { ExsistLecturerService } from './services/exsistLecturer.service';

const routes: Routes = [
// {path:"", component:LoginComponent,pathMatch:"full"},
{path:"login", component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"logout", component:LoginComponent},
{path:"allCourses", component:AllCoursesComponent, canActivate:[ExsistUserService]},
{path:"addCourse", component:AddCourseComponent,canActivate:[ExsistUserService,ExsistLecturerService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
