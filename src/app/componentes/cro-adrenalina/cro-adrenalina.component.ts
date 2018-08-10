import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cro-adrenalina',
  templateUrl: './cro-adrenalina.component.html',
  styleUrls: ['./cro-adrenalina.component.css']
})
export class CroAdrenalinaComponent implements OnInit {

  public hora: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  public contador: number = 0; // este cuenta las desfibrilaciones
  public cont:any; // contador del reloj
  public message: string = '';
  public porcentaje:number = 0;

 
  constructor() { }

  ngOnInit() {
  }

  start(){
    if(this.cont == undefined){
      this.cont = setInterval(() => {
        this.segundos++;
        this.porcentaje += 0.55555; 
        if(this.porcentaje >= 100){
          this.porcentaje=0;
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
          this.porcentaje += 0.55555; 
          if(this.porcentaje >= 100){
            this.porcentaje=0;
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

  }

  contAdrenalina(){
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

  reiniciar(){

    clearInterval(this.cont);
    this.cont = null;
    this.contador = 0;
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.porcentaje = 0;
    this.message = '';
  }

  setwidth(){
    return this.porcentaje + '%';
  }

}
