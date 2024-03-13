import { Component, Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Course } from 'src/app/models/course.model';
import { Lecture } from 'src/app/models/lecturer.model';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';
import { LecturerService } from 'src/app/services/lecture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
@Injectable()
export class AddCourseComponent {

  notBeforeTodayValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate: Date = control.value;
      const today: Date = new Date();
      today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

      if (selectedDate < today) {
        return { 'notBeforeToday': true }; // Return error if selected date is before today
      }
      return null; // Return null if validation passes
    }
  }
  categoriesList: Category[];
  courseToAdd: Course;
  lecturer: Lecture;

  notEmpty1: boolean = false;
  syllabusItems: string[] = [];

  addCourseForm: FormGroup = new FormGroup({
    "nameCourse": new FormControl("", Validators.required),
    "kodeKategory": new FormControl("", Validators.required),
    "amountLessons": new FormControl("", [Validators.required, Validators.minLength(0)]),
    "startCourseDate": new FormControl("", Validators.required),
    "syllabusArr": new FormControl("", Validators.required),
    "wayLearning": new FormControl("", Validators.required),
    "image": new FormControl("", Validators.required),
  });

  constructor(private _categoryServise: CategoryService,
    private _courseService: CourseService, private _router: Router, private _lecturerService: LecturerService) { }

  addCourse() {

    this.categoriesList.forEach(category => {
      if (category.name === this.addCourseForm.value["kodeKategory"])
        this.addCourseForm.value["kodeKategory"] = category._id;

    })
    this.courseToAdd = new Course(
      this.addCourseForm.value["nameCourse"],
      this.addCourseForm.value["kodeKategory"],
      this.addCourseForm.value["amountLessons"],
      this.addCourseForm.value["startCourseDate"],
      this.addCourseForm.value["syllabusArr"],
      this.addCourseForm.value["wayLearning"],
      this.lecturer._id,
      this.addCourseForm.value["image"]
    );
    console.log("course to add: " + this.courseToAdd
    );
    this._courseService.postCourse(this.courseToAdd).subscribe({
      // error(error) {console.log('error', error) },
      next(res) { console.log('result', res) }
      //     res=>{
      // console.log('arrive');

      //       // console.log(JSON.stringify(this.courseToAdd));
      //       // Swal.fire({
      //       //   position: "top-end",
      //       //   icon: "success",
      //       //   title: "The course has been saved successfully",
      //       //   showConfirmButton: false,
      //       //   timer: 1500
      //       // });
      //       // this._router.navigate(["/allCourses"]);
      //     },
      //     err=>{
      //       console.log(err);
      //       console.log("eroor in add");

      //     }
   } );

  }


  ngOnInit(): void {
    this._categoryServise.getCategories().subscribe(
      data => { this.categoriesList = data; },
      err => {
        console.log(err);
      }
    )

    this._lecturerService.getLectursFromStorage(localStorage.getItem('username'), localStorage.getItem('password')).subscribe(
      res => {
        this.lecturer = res;
        console.log(this.lecturer);

      },
      err => {
        console.log("cannot find");
        console.log(err);
      }
    )
  }
}
