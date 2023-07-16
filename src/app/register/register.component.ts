import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


//initialisation des colonnes
  name: string="";
  lastname: string="";
  email: string="";
  phone: number=0;
  password: string ="";


  constructor(private http: HttpClient)
  {

  }
  save()
  {
    let bodyData = {
      "name" : this.name,
      "lastname" : this.lastname,
      "email" : this.email,
      "phone" : this.phone,
      "password" : this.password
    };
    this.http.post("http://localhost:8080/citoyen/signup",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Citoyen enregistré");
    });

}
}
