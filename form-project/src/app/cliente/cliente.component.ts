import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
// export class ClienteComponent implements OnInit {
  export class ClienteComponent {

  // username = "Falta importar de login"

  editFormCliente = true
  editFormEndereco = false
  editFormFinanceiro = false
 
  clienteForm = new FormGroup({
    cnpjcpf: new FormControl('', Validators.required),
    razaoSocial: new FormControl('', Validators.required),
    nomeFantasia: new FormControl('', Validators.required),
  });

  constructor() { }
  // constructor(public activatedRoute: Router) {
  //   this.username = this.activatedRoute.getCurrentNavigation().extras.state.username;
  // }

  onSubmit(){
    alert("Cliente Salvo com Sucesso!")

  }

  ngOnInit(): void {
  }

  clienteProximo(){
    this.editFormCliente = false
    this.editFormEndereco = true
    this.editFormFinanceiro = false
  }

  enderecoAnterior(){
    this.editFormCliente = true
    this.editFormEndereco = false
    this.editFormFinanceiro = false
  }

  enderecoProximo(){
    this.editFormCliente = false
    this.editFormEndereco = false
    this.editFormFinanceiro = true
  }

  financeiroAnterior(){
    this.editFormCliente = false
    this.editFormEndereco = true
    this.editFormFinanceiro = false
  }
 

}
