import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crodesfibrilar',
  templateUrl: './crodesfibrilar.component.html',
  styleUrls: ['./crodesfibrilar.component.css']
})
export class CrodesfibrilarComponent implements OnInit {

  public hora: number = 0;
  public minutos: number = 0;
  public segundos: number = 0;
  public contador: number = 0; // este cuenta las desfibrilaciones
  public cont:any; // contador del reloj
  public message: string = '';
  public porcentaje:number = 0;

  public horaLapso: number = 0;
  public minutosLapso: number = 0;
  public segundosLapso: number = 0;
  public contadorLapso: number = 0;
  public messageLapso: string = '';
  public porcentajeLapso:number = 0;


  constructor() { }

  ngOnInit() {
  }

  start(){
      /*this.segundos = 0;
      this.minutos = 0;
      this.hora = 0;
      this.porcentaje = 0;*/
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
        
      },1000
  );
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

  lapso(){
    this.horaLapso = this.hora;
    this.minutosLapso = this.minutos;
    this.segundosLapso = this.segundos;
  }

  contDesfibrilacion(){
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
