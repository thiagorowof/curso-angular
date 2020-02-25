import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'; // adicionado...
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) {}

  msg: string;
  status: string;

    loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  onSubmit(){
    if (this.loginForm.get('password').value.toLowerCase() == "admin" || this.loginForm.get('password').value.toLowerCase() == "admin")
    {
      // this.router.navigateByUrl('/cliente');
      this.router.navigate(['cliente']);
    } else {
      this.status = "danger"
      this.msg = "Nome de usuário ou senha incorretos..."
    }
  
  }
  ngOnInit(): void {

  }  
}
