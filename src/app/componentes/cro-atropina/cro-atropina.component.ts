import { Component, OnInit } from '@angular/core';
import { Reloj} from '../../modelo/reloj'

@Component({
  selector: 'app-cro-atropina',
  templateUrl: './cro-atropina.component.html',
  styleUrls: ['./cro-atropina.component.css']
})
export class CroAtropinaComponent implements OnInit {

  public message: string = '';
  public porcentaje:number = 0;
  public relojAtropina: Reloj = new Reloj();
  public atropina: any;
  public contador: number = 0;

 
  constructor() { 
    this.relojAtropina.resetTimer();
  }

  ngOnInit() {
  }

  start(){
    clearInterval(this.atropina);
    this.atropina = setInterval(() => {

      this.relojAtropina.getStart();
      this.porcentaje += 0.55555; 
        if(this.porcentaje >= 100){
          this.porcentaje=0;
        }
    }, 1000);

    this.contador++;
    if(this.contador == 0){
      this.message = '';
    }

    if(this.contador >= 6){
      this.message = 'Considere MARCAPASO TRANSCUTÁNEO o Dopamina o Adrenlina';
    }

    if(this.contador < 6){
      this.message = 'Observe evolución';
    }
  }

  stop(){
    clearInterval(this.atropina);
  }

  reiniciar(){
    clearInterval(this.atropina);
    this.relojAtropina.resetTimer();
    this.porcentaje = 0;
    this.contador = 0;
  }

  setwidth(){
    return this.porcentaje + '%';
  }

}
