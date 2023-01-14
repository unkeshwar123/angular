import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myReactiveForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    // this.myReactiveForm=new FormGroup({
    //   'email':new FormControl(null),
    //   'passward':new FormControl(null)
    // })
  }
  

}
