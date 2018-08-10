import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cro-atropina',
  templateUrl: './cro-atropina.component.html',
  styleUrls: ['./cro-atropina.component.css']
})
export class CroAtropinaComponent implements OnInit {

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
          this.porcentaje += 0.83333; 
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

  contAtropina(){
    this.contador++;
    if(this.contador == 0 || this.contador > 3){
      this.message = '';
    }

    if(this.contador == 6){
      this.message = 'Considere: Marcapaso, Dopamina o Adrenalina o NorAdrenalina';
    }

    if(this.contador > 6){
      this.message = 'El número de dosis máximos es de 6';
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
