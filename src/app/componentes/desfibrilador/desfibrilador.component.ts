import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desfibrilador',
  templateUrl: './desfibrilador.component.html',
  styleUrls: ['./desfibrilador.component.css']
})
export class DesfibriladorComponent implements OnInit {

  titleDesfibrilacion: string = 'Mostrar desfibrilación';
  titleAdrenalina: string = 'Mostrar Adrenalina';
  titleAmiodarona: string = 'Mostrar Amiodarona';
  titleAtropina: string = 'Mostrar Atropina';
  titleFraccion: string = 'Mostrar Fraccion Compresión';

  booleaDesfibrinacion: boolean = false;
  booleaAdrenalina: boolean = false;
  booleanAmiodarona: boolean = false;
  booleanAtropina: boolean = false;
  booleanFraccion: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  mostrarDesfibrilacion(){
    if (this.booleaDesfibrinacion){
      this.titleDesfibrilacion = 'Mostrar desfibrilación';
    }
    else{
      this.titleDesfibrilacion = 'Ocultar desfibrilación';
    }
    return this.booleaDesfibrinacion = !this.booleaDesfibrinacion;
  }

  mostrarAdrenalina(){
    if (this.booleaAdrenalina){
      this.titleAdrenalina = 'Mostrar Adrenalina';
    }
    else{
      this.titleAdrenalina = 'Ocultar Adrenalina';
    }
    return this.booleaAdrenalina = !this.booleaAdrenalina;
  }

  mostrarAmiodarona(){
    if (this.booleanAmiodarona){
      this.titleAmiodarona = 'Mostrar Amiodarona';
    }
    else{
      this.titleAmiodarona = 'Ocultar Amiodarona';
    }
    return this.booleanAmiodarona = !this.booleanAmiodarona;
  }

  mostrarAtropina(){
    if (this.booleanAtropina){
      this.titleAtropina = 'Mostrar Atropina';
    }
    else{
      this.titleAtropina = 'Ocultar Atropina';
    }
    return this.booleanAtropina = !this.booleanAtropina;
  }

  mostrarFraccion(){
    if (this.booleanFraccion){
      this.titleFraccion = 'Mostrar Fracción Contración';
    }
    else{
      this.titleFraccion = 'Ocultar Fracción Contración';
    }
    return this.booleanFraccion = !this.booleanFraccion;
  }

}
