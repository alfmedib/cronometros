import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fraccion-c-t',
  templateUrl: './fraccion-c-t.component.html',
  styleUrls: ['./fraccion-c-t.component.css']
})
export class FraccionCTComponent implements OnInit {

  public hora: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  public contador: number = 0; // este cuenta las desfibrilaciones
  public cont:any; // contador del reloj
  public message: string = '';
  public porcentaje:number = 0;
  public seg: number = 0;

  public horaInterrupcion: number = 0;
  public minutosInterrupcion: number = 0;
  public segundosInterrupcion: number = 0;
  public contadorInterrupcion: number = 0; // este cuenta las desfibrilaciones
  public contInterrupcion:any; // contador del reloj
  public segInterrupcion: number = 0;
  

  constructor() { }

  ngOnInit() {
  }

  start(){
    if(this.cont == undefined){
      this.cont = setInterval(() => {
        this.segundos++;
        this.seg +=  this.segundos;
        if(this.seg > 0){
          this.porcentaje = ((this.seg - this.segInterrupcion) * 100) / this.seg; 
        }
        if(this.segundos == 60){
          this.segundos = 0
          this.minutos++;
          if(this.minutos == 60){
            this.minutos = 0;
            this.hora++;
            if(this.hora == 24){
              this.hora = 0;
            }
          }
        }
        
      },1000);
    }
  }

  stop(){
    clearInterval(this.cont);
    this.cont = null;
  }

  continuar(){
    if(this.hora !=0 || this.minutos !=0 || this.segundos != 0){
      if(this.cont == undefined){
        this.cont = setInterval(() => {
          this.segundos++;
          this.seg +=  this.segundos;

          if(this.seg > 0)
          this.porcentaje = ((this.seg - this.segInterrupcion) * 100) / this.seg; 
          
          if(this.segundos == 60){
            this.segundos = 0
            this.minutos++;
            if(this.minutos == 60){
              this.minutos = 0;
              this.hora++;
              if(this.hora == 24){
                this.hora = 0;
              }
            }
          }
          
        },1000);
      }
    }

  }

  
  reiniciar(){

    clearInterval(this.cont);
    this.cont = null;
    this.contador = 0;
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.seg = 0;
    this.porcentaje = 0;
    this.message = '';
  }


  startInterrupcion(){
    if(this.contInterrupcion == undefined){
      this.contInterrupcion = setInterval(() => {
        this.segundosInterrupcion++;
        this.segInterrupcion +=  this.segundosInterrupcion;

        if(this.seg > 0){
          this.porcentaje = ((this.seg - this.segInterrupcion) * 100) / this.seg; 
        }

        if(this.segundosInterrupcion == 60){
          this.segundosInterrupcion = 0
          this.minutosInterrupcion++;
          if(this.minutosInterrupcion == 60){
            this.minutosInterrupcion = 0;
            this.horaInterrupcion++;
            if(this.horaInterrupcion == 24){
              this.horaInterrupcion = 0;
            }
          }
        }
        
      },1000);
    }
  }

  stopInterrupcion(){
    clearInterval(this.contInterrupcion);
    this.contInterrupcion = null;
  }

  continuarInterrupcion(){
    if(this.horaInterrupcion !=0 || this.minutosInterrupcion !=0 || this.segundosInterrupcion != 0){
      if(this.contInterrupcion == undefined){
        this.contInterrupcion = setInterval(() => {
          this.segundosInterrupcion++;
          this.segInterrupcion +=  this.segundosInterrupcion;

          if(this.seg > 0){
            this.porcentaje = ((this.seg - this.segInterrupcion) * 100) / this.seg; 
          }
          
          if(this.segundosInterrupcion == 60){
            this.segundosInterrupcion = 0
            this.minutosInterrupcion++;
            if(this.minutosInterrupcion == 60){
              this.minutosInterrupcion = 0;
              this.horaInterrupcion++;
              if(this.horaInterrupcion == 24){
                this.horaInterrupcion = 0;
              }
            }
          }
          
        },1000);
      }
    }
  }

  reiniciarInterrupcion(){

    clearInterval(this.contInterrupcion);
    this.contInterrupcion = null;
    this.contadorInterrupcion = 0;
    this.horaInterrupcion = 0;
    this.minutosInterrupcion = 0;
    this.segundosInterrupcion = 0;
    this.segInterrupcion = 0;
    this.porcentaje = 0;
    this.message = '';
  }

  setwidth(){
    return this.porcentaje + '%';
  }
}
