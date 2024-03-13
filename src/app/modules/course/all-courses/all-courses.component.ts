import { Component, Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
@Injectable()
export class AllCoursesComponent {
  
  coursesList:Course[];
  constructor(private _courseService:CourseService) {}

 
  ngOnInit(): void { 
    this._courseService.getCourses().subscribe(
      data=>{
        this.coursesList=data;
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    )
    
  }

  

}
