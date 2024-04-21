import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ExsistUser implements CanActivate{
    constructor(private _router: Router) { }

    canActivate(): boolean {
        if (sessionStorage.getItem("userName")=== null && 
        sessionStorage.getItem("userPassword") === null) {
            alert("You are not connected!")
            this._router.navigate(["/login"])
            return false;
        }
        return true;
    }
}