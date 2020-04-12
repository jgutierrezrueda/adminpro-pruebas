import {Component, Input, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() type: ChartType = 'doughnut';

  constructor() {
  }

  ngOnInit(): void {
  }

}
