import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { SyllabusDialogComponent } from '../syllabus-dialog/syllabus-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { categoryService } from 'src/app/services/category.service';
import { LecturerService } from 'src/app/services/lecture.service';
import { Category } from 'src/app/models/category.model';
import { Lecture } from 'src/app/models/lecturer.model';



@Component({
  selector: 'app-course-detailes',
  templateUrl: './course-detailes.component.html',
  styleUrls: ['./course-detailes.component.scss']
})
export class CourseDetailesComponent {


  @Input()
  course:Course;
  coursCategory:Category;
  courseLecturer:Lecture;
  constructor(public dialog:MatDialog, private _router:Router, private _categoryService:categoryService,
    private _lecturersService:LecturerService){

  }

  ngOnInit():void{
    this._categoryService.getCategories().pipe().subscribe(res=>{
      this.coursCategory=res.find(x=>x._id==this.course.kodeCategory)})
   
      this._lecturersService.getLecturses().subscribe(res =>{
            this.courseLecturer = res.find(x => x._id == this.course.kodeLecture)
            console.log(this.courseLecturer)
          },(err) =>{
            console.log(err);
          })
  }
  openDialog() {
    const dialogRef = this.dialog.open(SyllabusDialogComponent, {
      data: { syllabus: this.course.syllabusArr }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  editDetail(){
    this._router.navigate(['/editCourse/'])

  }
  

  
  myCourse(){
    if (sessionStorage.getItem("username") == this.courseLecturer?.name &&
      sessionStorage.getItem("password") == this.courseLecturer?.password)
      
      return true;
    return false;
  }
}

