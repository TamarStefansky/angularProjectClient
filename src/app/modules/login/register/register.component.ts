import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn } from '@angular/forms';
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
  
  hide: true;
  userToAdd:User;
  registerForm: FormGroup;
  loginName:string;

  addUser(){
    console.log(this.registerForm.value["username"])
    this.userToAdd = new User(
      this.registerForm.value["username"], 
      this.registerForm.value["address"], 
      this.registerForm.value["email"], 
      this.registerForm.value["password"]
    );
    this._userService.addUser(this.userToAdd).subscribe(
      res=>{
        console.log("register user "+this.registerForm["username"]+" overed successfully!");
        sessionStorage.setItem('userName', this.addUser["name"]);
        sessionStorage.setItem('userPassword', this.addUser["password"]);
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
    const storage=localStorage.getItem("userToAdd");
    const storageObject=JSON.parse(storage);
    if(storageObject!=null&&storageObject!=undefined){
      this.loginName=storageObject;
    }
    else{
      this.loginName="";
    }

    this.registerForm=new FormGroup({
      "username": new FormControl(this.loginName, Validators.required),
      "email":  new FormControl('', [Validators.email,Validators.required]),
      "address": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required)
    });
    
  }

}
