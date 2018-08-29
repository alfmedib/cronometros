import { Component, OnInit } from '@angular/core';
import { Reloj } from '../../modelo/reloj';

@Component({
  selector: 'app-fraccion-c-t',
  templateUrl: './fraccion-c-t.component.html',
  styleUrls: ['./fraccion-c-t.component.css']
})
export class FraccionCTComponent implements OnInit {

    cronoCompresiones: Reloj = new Reloj();
    cronoRCP: Reloj = new Reloj();
    cronoPausa: Reloj = new Reloj();

    buttonLabel: string;

    cronoCompresion:any;
    cronoRcp:any;
    cronoParar: any;

    porcentaje: any;

    isPausa:boolean = false;
    isRCP = true
    isCompresiones = false;
    
    constructor() { 
      this.cronoRCP.resetTimer();
      this.cronoCompresiones.resetTimer();
      this.cronoPausa.resetTimer();
    }

    ngOnInit() {
    }

    inicioRCP(){
    clearInterval(this.cronoCompresion);
    clearInterval(this.cronoRcp);
    clearInterval(this.cronoParar);
    this.cronoCompresion = setInterval(() => this.cronoCompresiones.getStart(), 1000);
    this.cronoParar = setInterval(() => this.cronoPausa.getStart(), 1000);

    }
    
  start(){
    
    clearInterval(this.cronoCompresion);
    clearInterval(this.cronoRcp);
    clearInterval(this.cronoParar);
    
    this.cronoRcp = setInterval(() => this.cronoRCP.getStart(), 1000);
    this.cronoCompresion = setInterval(() => {
      this.cronoCompresiones.getStart();
      this.porcentaje = ((this.cronoRCP.getContSeg() * 100) / this.cronoCompresiones.getContSeg());
    }, 1000);
  }

  stop(){
  clearInterval(this.cronoParar);
  clearInterval(this.cronoRcp);
  this.cronoParar = setInterval(() => this.cronoPausa.getStart(), 1000);
  }

  finalizar(){

  clearInterval(this.cronoParar);
  clearInterval(this.cronoRcp);
  clearInterval(this.cronoCompresion);
  this.isPausa = false;
  this.isRCP = false;
  this.isCompresiones = true;
  
  }

  reiniciar(){

    clearInterval(this.cronoParar);
    clearInterval(this.cronoRcp);
    clearInterval(this.cronoCompresion);
    this.isPausa = false;
    this.isCompresiones = false;
    this.isRCP = true;

    this.cronoRCP.resetTimer();
    this.cronoCompresiones.resetTimer();
    this.cronoPausa.resetTimer();
    this.porcentaje = 0;
  }

  setwidth(){
    return this.porcentaje + '%';
  }

  pausa(): boolean{
    this.isRCP = false;
    if(this.isCompresiones){
      this.isPausa = true;
      this.isCompresiones = false;
      return this.isPausa;
    }
    else{
      this.isPausa = false;
      this.isCompresiones = true;
    }
    return this.isCompresiones;
  }
}
