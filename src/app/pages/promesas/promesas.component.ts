import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(() => {
        console.log('terminó');
      }
    ).catch(error => {
      console.error('error en la promesa: ', error);
    });
  }

  private contarTres(): any {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve('OK!');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

}
