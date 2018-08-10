import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forNumber'
})
export class ForNumberPipe implements PipeTransform {

  
  //valor es el numero que pasamos
  transform(value: number): any {
        let ar: any;
    if(value < 10){
      ar = ('0' + value);
    }
    else{
      ar = value;
    }

    return ar;
  }

}
