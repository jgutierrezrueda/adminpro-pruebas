import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map, retry, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {
    this.subscription = this.getObservable().subscribe(numero => {
      console.log('Subs ', numero);
    }, error => {
      console.error('Error en el obs: ', error);
    }, () => {
      console.log('El observador terminó');
    });
  }

  getObservable(): Observable<any> {
    // @ts-ignore
    return new Observable(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        };
        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   observer.error('Auxilio!!');
        // }
      }, 1000);
    }).pipe(
      map(resp => {
        return resp['valor'];
      }),
      filter((valor: number, index: number) => {
        console.log('filter ', index, valor);
        return !!(valor % 2 === 0);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
