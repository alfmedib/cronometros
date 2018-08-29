import { Component, OnInit } from '@angular/core';
import {Reloj} from '../../modelo/reloj';

@Component({
  selector: 'app-crodesfibrilar',
  templateUrl: './crodesfibrilar.component.html',
  styleUrls: ['./crodesfibrilar.component.css']
})
export class CrodesfibrilarComponent implements OnInit {

  public message: string = '';
  public porcentaje:number = 0;
  public relojDesfibrilador: Reloj = new Reloj();
  public desfibrilador: any;
  public contador: number = 0;

 
  constructor() { 
    this.relojDesfibrilador.resetTimer();
  }

  ngOnInit() {
  }

  start(){
    clearInterval(this.desfibrilador);
    this.desfibrilador = setInterval(() => {

      this.relojDesfibrilador.getStart();
      this.porcentaje += 0.83333; 
        if(this.porcentaje >= 100){
          this.porcentaje=0;
        }
    }, 1000);

    this.contador++;
    if(this.contador == 0 || this.contador > 3){
      this.message = '';
    }

    if(this.contador == 1){
      this.message = 'Considere ACCESO IV o IO';
    }

    if(this.contador == 2){
      this.message = 'Considere administrar ADRENALINA 1 mg, Dispositivo avanzado de vía aérea';
    }

    if(this.contador == 3){
      this.message = 'Considere administrar AMIODARONA 300 mg, Tratar las causas reversibles';
    }
  }

  stop(){
    clearInterval(this.desfibrilador);
  }

  reiniciar(){
    clearInterval(this.desfibrilador);
    this.relojDesfibrilador.resetTimer();
    this.porcentaje = 0;
    this.contador = 0;
  }

  setwidth(){
    return this.porcentaje + '%';
  }

 

}
