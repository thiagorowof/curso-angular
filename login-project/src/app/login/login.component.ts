import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password: string;
  msg: string;
  status: string;

  constructor() { }

  ngOnInit(): void {
  }

  logInUser()
  {
    if (this.username == "admin" && this.password == "admin")
    {
      // console.log("Welcome...." + this.username )
      // alert("Welcome...." + this.username )
      this.status = "success"
      this.msg = "Usuário Validado!"
    } else {
      // alert("Usuário ou Senha incorretas....")
      this.status = "danger"
      this.msg = "Nome de usuário ou senha incorretos"
      // console.log("Welcome...." + this.username )
    }
  }
}
