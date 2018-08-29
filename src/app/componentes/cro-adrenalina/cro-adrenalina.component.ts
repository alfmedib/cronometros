import { Component, OnInit } from '@angular/core';
import { Reloj } from '../../modelo/reloj'

@Component({
  selector: 'app-cro-adrenalina',
  templateUrl: './cro-adrenalina.component.html',
  styleUrls: ['./cro-adrenalina.component.css']
})
export class CroAdrenalinaComponent implements OnInit {

  public message: string = '';
  public porcentaje:number = 0;
  public relojAdrenalina: Reloj = new Reloj();
  public adrenalina: any;
  public contador: number = 0;

 
  constructor() { 
    this.relojAdrenalina.resetTimer();
  }

  ngOnInit() {
  }

  start(){
    clearInterval(this.adrenalina);
    this.adrenalina = setInterval(() => {

      this.relojAdrenalina.getStart();
      this.porcentaje += 0.55555; 
        if(this.porcentaje >= 100){
          this.porcentaje=0;
        }
    }, 1000);

    this.contador++;
    if(this.contador == 0 || this.contador > 3){
      this.message = '';
    }

    if(this.contador == 1){
      this.message = 'Considere Dispositivo avanzado de vía aérea';
    }

    if(this.contador == 2){
      this.message = 'Tratar las causas reversibles';
    }
  }

  stop(){
    clearInterval(this.adrenalina);
  }

  reiniciar(){
    clearInterval(this.adrenalina);
    this.relojAdrenalina.resetTimer();
    this.porcentaje = 0;
    this.contador = 0;
    this.message = '';
  }

  setwidth(){
    return this.porcentaje + '%';
  }
}
