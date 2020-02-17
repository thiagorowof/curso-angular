import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'calculadora';

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

}
