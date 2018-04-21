import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaturamentoService} from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento;
  inscricao;
  erro;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.inscricao = this.faturamentoService.getFaturamento().subscribe(dados => this.faturamento = dados, erro => this.erro = true);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
