import { Injectable } from '@angular/core';
import {NewsUser} from "./news-user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) {}

    public loginNewsUserFromRemote(user: NewsUser):Observable<any> {
    return this._http.post<any>("http://localhost:8080/api/v1/login", user);
  }

  public registerUserFromRemote(user : NewsUser):Observable<any>{
    return this._http.post<any>("http://localhost:8080/api/v1/registeruser", user);
  }
}
