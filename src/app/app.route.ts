import { PedidoComponent } from './pedido/pedido.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router'


export const ROUTES : Routes = [
    {path: '', component: HomeComponent},
    {path: 'desc/:id', component: DescricaoComponent},
    {path: 'pedido/cerveja/:id', component: PedidoComponent},
    {path: 'cerveja', component: HomeComponent},
]