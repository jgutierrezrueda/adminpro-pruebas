import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  private static aplicarCheck(link: any): void {
    const selectores: any = document.getElementsByClassName('selector');
    _.forEach(selectores, (s: any): void => {
      s.classList.remove('working');
    });
    link.classList.add('working');
  }

  colocarCheck(): void {
    const selectores: any = document.getElementsByClassName('selector');
    _.forEach(selectores, (s: any): void => {
      if (this.ajustesService.ajustes.tema === s.getAttribute('data-theme')) {
        s.classList.add('working');
        return;
      }
    });
  }

  constructor(private ajustesService: SettingsService) {
    this.ajustesService.cargarAjustes();
  }

  public cambiarColor(tema: string, link: any): void {
    AccountSettingsComponent.aplicarCheck(link);
    this.ajustesService.aplicarTema(tema);
  }

  ngOnInit(): void {
    this.colocarCheck();
  }

}
