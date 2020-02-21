import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
// export class ClienteComponent implements OnInit {
  export class ClienteComponent {

  username = "Falta importar de login"
  

  constructor() { }
  // constructor(public activatedRoute: Router) {
  //   this.username = this.activatedRoute.getCurrentNavigation().extras.state.username;
  // }

  ngOnInit(): void {
  }

}
