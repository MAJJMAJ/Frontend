import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent {
  email: string = "";
  password: string = "";
   constructor(private http: HttpClient,  private router: Router) { }
   signIn = () => {
    const loginData = { email: this.email, password: this.password };
     this.http.post("http://localhost:8080/citoyen/login", loginData).subscribe( 
      response => {
        console.log(response);
        if (response) {
          alert("Signed in successfully");
        } else {
          alert("Invalid email or password");
        }
      },
      (error) => {
        console.error(error);
        alert("An error occurred");
      }
    );
  }
}