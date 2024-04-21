import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";

@Injectable()
export class categoryService{
    
    private _baseUrl:string="http://localhost:8787/api/categories"
    constructor(private _http:HttpClient) {
          
    }
    getCategories():Observable<Category[]>{
        return this._http.get<Category[]>(this._baseUrl);
    }
    
}