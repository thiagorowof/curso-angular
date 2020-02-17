import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public numero1:number;
public numero2:number;
public resultado:number;

somar(){
  this.resultado = this.numero1 + this.numero2
}

subtrair(){
  this.resultado = this.numero1 - this.numero2
}

multiplicar(){
  this.resultado = this.numero1 * this.numero2
}

dividir(){
  this.resultado = (this.numero1) / (this.numero2)
}

  ngOnInit(): void {
  }

}
