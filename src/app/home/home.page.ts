import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  precoGasolina: number = 0;
  distancia: number = 0;
  consumo: number = 0;
  rendimento: number = 0;
  gastoViagem: number = 0;



  constructor() {}

  calcularGastoViagem() {
    this.gastoViagem = this.precoGasolina * (this.distancia / this.consumo);
  }

}
