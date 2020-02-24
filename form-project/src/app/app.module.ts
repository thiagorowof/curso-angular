import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EnderecoComponent } from './endereco/endereco.component';
import { FinanceiroComponent } from './financeiro/financeiro.component'; // adicionado....

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    EnderecoComponent,
    FinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
