import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailesComponent } from './course-detailes/course-detailes.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CourseService } from 'src/app/services/course.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { CategoryService } from 'src/app/services/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LecturerService } from 'src/app/services/lecture.service';



@NgModule({
  declarations: [
    AddCourseComponent,
    AllCoursesComponent,
    CourseDetailesComponent,
    EditCourseComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],

  exports:[AllCoursesComponent,AddCourseComponent,CourseDetailesComponent],
  providers:[HttpClient,CourseService,CategoryService,LecturerService]
})
export class CourseModule { }
