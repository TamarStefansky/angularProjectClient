import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent  {
  title = 'final-project';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private _router: Router) {
    this.navLinks = [
      {
        label: 'home',
        link: './',
        index: 0
    },
        {
            label: 'login',
            link: './login',
            index: 1
        }, {
            label: 'register',
            link: './register',
            index: 2
        }, {
            label: 'all courses',
            link: './allCourses',
            index: 3
        }, 
        {
          label: 'add course',
          link: './addCourse',
          index: 4
      },
    ];
}
  // lec:boolean;
  // ngDoCheck() {
  //   this.lec = sessionStorage.getItem('Lecturer') ? true : false;
  // }





//  <button routerLink="/addcourse" routerLinkActive="active" *ngIf="lec"><a >addcourse</a></button>


logout(){
  sessionStorage.removeItem('userName');
  sessionStorage.removeItem('userPassword');
  this._router.navigate(['/']);
  alert("logout success");
}
ngOnInit(): void {
  this._router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this._router.url));
  });
}
}