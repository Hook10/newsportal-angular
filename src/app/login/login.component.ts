import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationService} from "../registration.service";
import {NewsUser} from "../news-user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new NewsUser();
  msg='';

  constructor(private _service: RegistrationService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginNewsUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
      },
      error => {console.log("exception occurred");
      this.msg="Bad credentials, please enter valid email and password";
      }
    )
  }

  goToRegistration(){
    this._router.navigate(['/registration'])
  }


}
