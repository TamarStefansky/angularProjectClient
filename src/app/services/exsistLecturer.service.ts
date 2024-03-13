import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable(
    {providedIn:'root'}
)
export class ExsistLecturerService implements CanActivate{
    
   
    constructor(private _router:Router) { }
    canActivate():boolean{
        if(sessionStorage.getItem('userName')===null&&sessionStorage.getItem('userPassword')===null){
            alert("you are not connected");
            this._router.navigate(['/login']);
            return false;
        }
        if(localStorage.getItem('lecturerName')===null){
            alert("you are not allowed to add course");
            return false;
        }
        return true;

    }
    
}