import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-detailes',
  templateUrl: './course-detailes.component.html',
  styleUrls: ['./course-detailes.component.scss']
})
export class CourseDetailesComponent {


  @Input()
  course:Course;


  ngOnInit(): void {
    
  }

  
  
}
