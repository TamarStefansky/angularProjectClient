import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";

@Injectable()
export class CourseService{
    
    private _baseUrl:string="http://localhost:8787/api/courses/"
    constructor(private _http:HttpClient) {
          
    }
    getCourses():Observable<Course[]>{
        return this._http.get<Course[]>(this._baseUrl);
    }


    addCourse(courseToAdd:Course):Observable<boolean>{
        return this._http.post<boolean>(this._baseUrl, courseToAdd)
    }
    getCourseById(courseId: string): Observable<Course> {
        return this._http.get<Course>(`/api/courses/${courseId}`);
    }
      putCourse(updateCourse: Course, id: String): Observable<boolean> {
        return this._http.put<boolean>("/api/courses/" + id, updateCourse)
    }
}