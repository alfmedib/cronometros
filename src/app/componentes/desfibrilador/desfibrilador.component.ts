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

  booleaDesfibrinacion: boolean = true;
  booleaAdrenalina: boolean = true;
  booleanAmiodarona: boolean = true;
  booleanAtropina: boolean = true;
  booleanFraccion: boolean = true;


  constructor() { }

  ngOnInit() {
  }

  mostrarDesfibrilacion(){
    if (this.booleaDesfibrinacion){
      this.titleDesfibrilacion = 'Ocultar desfibrilación';
    }
    else{
      this.titleDesfibrilacion = 'Mostrar desfibrilación';
    }
    return this.booleaDesfibrinacion = !this.booleaDesfibrinacion;
  }

  mostrarAdrenalina(){
    if (this.booleaAdrenalina){
      this.titleAdrenalina = 'Ocultar Adrenalina';
    }
    else{
      this.titleAdrenalina = 'Mostrar Adrenalina';
    }
    return this.booleaAdrenalina = !this.booleaAdrenalina;
  }

  mostrarAmiodarona(){
    if (this.booleanAmiodarona){
      this.titleAmiodarona = 'Ocultar Amiodarona';
    }
    else{
      this.titleAmiodarona = 'Mostrar Amiodarona';
    }
    return this.booleanAmiodarona = !this.booleanAmiodarona;
  }

  mostrarAtropina(){
    if (this.booleanAtropina){
      this.titleAtropina = 'Ocultar Atropina';
    }
    else{
      this.titleAtropina = 'Mostrar Atropina';
    }
    return this.booleanAtropina = !this.booleanAtropina;
  }

  mostrarFraccion(){
    if (this.booleanFraccion){
      this.titleFraccion = 'Ocultar Fracción Contración';
    }
    else{
      this.titleFraccion = 'Mostrar Fracción Contración';
    }
    return this.booleanFraccion = !this.booleanFraccion;
  }

}
