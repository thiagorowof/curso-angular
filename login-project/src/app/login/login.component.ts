import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  logInUser()
  {
    if (this.username == "Admin" && this.password == "admin123")
    {
      console.log("Welcome...." + this.username )
    } else {
      alert("Usuário ou Senha incorretas....")
    }
  }
}
