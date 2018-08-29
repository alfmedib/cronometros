import { Component, OnInit } from '@angular/core';
import { Reloj } from '../../modelo/reloj'

@Component({
  selector: 'app-cro-amiodarona',
  templateUrl: './cro-amiodarona.component.html',
  styleUrls: ['./cro-amiodarona.component.css']
})
export class CroAmiodaronaComponent implements OnInit {

  public message: string = '';
  public porcentaje:number = 0;
  public relojAmiodarona: Reloj = new Reloj();
  public amiodarona: any;
  public contador: number = 0;

 
  constructor() { 
    this.relojAmiodarona.resetTimer();
  }

  ngOnInit() {
  }

  start(){
    clearInterval(this.amiodarona);
    this.amiodarona = setInterval(() => {

      this.relojAmiodarona.getStart();
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
      this.message = 'Tratar las causas reversibles';
    }
  }

  stop(){
    clearInterval(this.amiodarona);
  }

  reiniciar(){
    clearInterval(this.amiodarona);
    this.relojAmiodarona.resetTimer();
    this.porcentaje = 0;
    this.contador = 0;
  }

  setwidth(){
    return this.porcentaje + '%';
  }


}
