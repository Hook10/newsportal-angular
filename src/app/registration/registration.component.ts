import { Component, OnInit } from '@angular/core';
import {NewsUser} from "../news-user";
import {Router} from "@angular/router";
import {RegistrationService} from "../registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user= new NewsUser();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received ");
        this._router.navigate(['/'])
      },
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
