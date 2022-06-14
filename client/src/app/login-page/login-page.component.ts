import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Material } from '../material';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
  API = "http://localhost:3000/Material";
  email: string = '';
  password: string = '';

  constructor(public http: HttpClient) { }

  updateProyect(proyecto:Material){
    const body = {};
      return this.http.get(this.API, body);
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
