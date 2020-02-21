import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username:string = '';
  password: string = '';
  msg: string;
  status: string;

  constructor(public router: Router) {}

  ngOnInit(): void {

  }

  logInUser(){
    if (this.username.toLowerCase() == "admin" && this.password.toLowerCase() == "admin")
    {
      // this.router.navigateByUrl('/cliente');
      this.router.navigate(['cliente'], {state: {username: this.username}});
    } else {
      this.status = "danger"
      this.msg = "Nome de usuário ou senha incorretos..."
    }
  }
  
}
