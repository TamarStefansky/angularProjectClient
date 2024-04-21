import { Component, Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { inject } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';
import { LecturerService } from 'src/app/services/lecture.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable()
export class LoginComponent {
   constructor(private _userService:UserService,private _router:Router ,private _lecturerService:LecturerService){
    this._userService.getUsers().subscribe(
      data=>{
        this.users=data;
      }
    )
   }
   hide = true;
  username:string;
  password:string;
  error: boolean = false;
  isLecture: boolean = false;
  users:User[];
  onSubmit(){
    this.username;
    this.error = false;
    if(this.isLecture===true){
      this.chackIfLecture();
    }
    
    this._userService.loginUser(this.username, this.password).subscribe(
      response => {
        sessionStorage.setItem("userName", this.username);
        sessionStorage.setItem("userPassword", this.password);
        this._router.navigate(["/allCourses"]);
        console.log('User '+this.username+' exsists');
        
      },
      (error: HttpErrorResponse) => {
        // Handle error
        if (error.status === 404) {
          console.log('User not found.');
          var userExsist = this.users.some(user=>user.name===this.username);
          if(!userExsist){
            const jsonString=JSON.stringify(this.username);
            localStorage.setItem('userToAdd', jsonString);
            this._router.navigate(["/register"]);
          }
          else{
            
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your password is wrong! please try again"
          })
          
        } 
      }
      else if (error.status === 401) {
          console.log('Unauthorized: Incorrect username or password.');
        } else if (error.error && error.error.error === 'User exists') {
          console.log('User exists.');
        } else {
          console.error('An unexpected error occurred:', error.error);
        }
      });
  }

  changeIsLecture(){
    this.isLecture=true;
  }
  chackIfLecture(){
      // this.error = false;
      this._lecturerService.checkLecturer(this.username, this.password).subscribe(
        response => {
          // localStorage.setItem('username', this.username);
          // localStorage.setItem('password', this.password);
          // sessionStorage.setItem("userName", this.username);
          // sessionStorage.setItem("userPassword", this.password);
          sessionStorage.setItem('lectureName',this.username);
           this._router.navigate(["/allCourses"]);
          console.log('lecturer '+this.username+' exsists');
          
        },
        (error: HttpErrorResponse) => {
          // Handle error
          if (error.status === 404) {
            console.log('lecturer not found.');
            this._router.navigate(["/register"]);
          } else if (error.status === 401) {
            console.log('Unauthorized: Incorrect username or password.');
          } else if (error.error && error.error.error === 'User exists') {
            console.log('User exists.');
          } else {
            console.error('An unexpected error occurred:', error.error);
          }
        });
    
  }
  

  
}
