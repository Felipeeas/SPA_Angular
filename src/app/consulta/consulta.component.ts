import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConsultaService} from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  consultas;
  inscricao;
  erro;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.inscricao = this.consultaService.getConsulta()
      .subscribe(dados => this.consultas = dados, erro => this.erro = true);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
