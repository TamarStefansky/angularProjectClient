import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   nameFromLogin:string;
   registerForm: FormGroup;



  
  hide: true;
  userToAdd:User;

  addUser(){
    this.userToAdd = new User(this.registerForm.value["username"], this.registerForm.value["address"], this.registerForm.value["email"], this.registerForm.value["password"]);
    this._userService.addUser(this.userToAdd).subscribe(
      res=>{
        console.log("register user "+this.registerForm.value["username"]+" overed successfully!");
        sessionStorage.setItem('userName', this.registerForm.value["username"]);
        sessionStorage.setItem('userPassword', this.registerForm.value["password"]);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your details has been saved successfully",
          showConfirmButton: false,
          timer: 1500
        });
        this._router.navigate(["/allCourses"]);
      },
      err=>{
         console.log(err);
      }
    )
  }
  constructor(private _userService: UserService, private _router:Router) {
    
   const storedJsonString = localStorage.getItem('userToAdd');
   const storedObject = JSON.parse(storedJsonString);
   if(storedObject!=null&&storedObject!=undefined)
     this.nameFromLogin=storedObject;
     else{
      this.nameFromLogin="";
  
     }
     this.registerForm=new FormGroup({
      "username": new FormControl(this.nameFromLogin, Validators.required),
      "email":  new FormControl('', [Validators.email,Validators.required]),
      "address": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required)
    });
   }
   

}
