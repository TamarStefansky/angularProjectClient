import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class UserService{
    
    private _baseUrl:string="http://localhost:8787/api/users"
    constructor(private _http:HttpClient) {
          
    }
    getUsers():Observable<User[]>{
        return this._http.get<User[]>(this._baseUrl);
    }

    loginUser(name: string, password: string): Observable<boolean> {
        return this._http.post<boolean>(`${this._baseUrl}/login`, { name, password });
      }

    addUser(user:User):Observable<any>{
        return this._http.post<any>("http://localhost:8787/api/users/",user);
    }
}
