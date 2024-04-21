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
import {MatDividerModule} from '@angular/material/divider';
import { categoryService } from 'src/app/services/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SyllabusDialogComponent } from './syllabus-dialog/syllabus-dialog.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AddCourseComponent,
    AllCoursesComponent,
    CourseDetailesComponent,
    EditCourseComponent,
    SyllabusDialogComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule
  ],

  exports:[AllCoursesComponent,AddCourseComponent, EditCourseComponent],
  providers:[HttpClient, CourseService, categoryService],
})
export class CourseModule { }
