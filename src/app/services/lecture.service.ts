import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LecturerService{
    
    private _baseUrl:string="http://localhost:8787/api/lecturers"
    constructor(private _http:HttpClient) {}
   
     checkLecturer(name: string, password: string): Observable<boolean> {
        return this._http.post<boolean>(`${this._baseUrl}/getLecturer`, { name, password });
      }

      getLectursFromStorage(name:string,password:string):Observable<any>{
        return this._http.post<any>(`${this._baseUrl}/getLecturer`,{name,password});
      }
}
