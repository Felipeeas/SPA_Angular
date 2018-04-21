import { NgModule } from '@angular/core';
import {ConsultaComponent} from './consulta/consulta.component';
import {ResumoComponent} from './resumo/resumo.component';
import {RouterModule} from '@angular/router';
import {FaturamentoComponent} from './faturamento/faturamento.component';


const routes = [
  { path : 'resumo', component: ResumoComponent},
  { path : 'consulta', component: ConsultaComponent},
  { path : 'faturamento', component: FaturamentoComponent},
  { path : '**' , redirectTo: '/resumo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
