import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Course } from 'src/app/models/course.model';
import { categoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
@Injectable()
export class AddCourseComponent {

categoryList:Category[];
courseToAdd:Course;

addCourseForm: FormGroup = new FormGroup({
  "nameCourse": new FormControl("", Validators.required),
  "category": new FormControl("", Validators.required),
  "amountLessons": new FormControl("", [Validators.required, Validators.minLength(0)]),
  "startDate": new FormControl("", [Validators.required]),
  "syllabus": new FormControl("", Validators.required),
  "wayLearning": new FormControl("", Validators.required),
  "image": new FormControl("", Validators.required),
})

constructor(private _categoryService: categoryService, private _courseServise:CourseService,
   private _router: Router) {
}

AddCourse(){
this.categoryList.forEach(category=>{
  if(category.name===this.addCourseForm.value["category"])
  this.addCourseForm.value["category"]=category._id})

  this.courseToAdd=new Course(
    this.addCourseForm.value["nameCourse"],
    this.addCourseForm.value["category"],
    this.addCourseForm.value["amountLessons"],
    this.addCourseForm.value["startDate"],
    this.addCourseForm.value["syllabus"],
    this.addCourseForm.value["wayLearning"],
    // this.addCourseForm.value[]
    this.addCourseForm.value["image"]
  )
  this._courseServise.addCourse(this.courseToAdd).subscribe();
  alert("add course is success!");
  this._router.navigate(["/allCourses"]);
}

ngOnInit(){
  this._categoryService.getCategories().subscribe(
    data=>{this.categoryList=data;
    }, err=>{console.log(err);
  })
}
}

