import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = 'leyenda';
  public progreso: number = 50;

  constructor() {
  }

  public cambiarValor(valor: number): void {
    if (this.progreso >= 100 && valor > 0) {
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      return;
    }
    this.progreso += valor;
  }

  ngOnInit(): void {
  }

}
