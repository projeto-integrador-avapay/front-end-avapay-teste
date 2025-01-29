import { Routes } from '@angular/router';
import { UsuarioListComponent } from './components/usuario/usuario-list.component';
import { EnderecoListComponent } from './components/endereco/endereco-list.component';
import { ContaListComponent } from './components/conta/conta-list.component';
import { TransacoesListComponent } from './components/transacoes/transacoes-list.component';

export const routes: Routes = [

    
      { path: 'usuarios', component: UsuarioListComponent },
      { path: 'enderecos', component: EnderecoListComponent },
      { path: 'contas', component: ContaListComponent },
      { path: 'transacoes', component: TransacoesListComponent },
      { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
    
];
