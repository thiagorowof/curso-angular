import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';



const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
