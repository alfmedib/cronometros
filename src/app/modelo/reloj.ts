export class Reloj {

    private segundos:number;
    private minutos: number;
    private horas: number;
    private contSeg:number;
            
    public getStart(): void {
      
      this.segundos++;
      this.contSeg ++;
         
      if(this.segundos == 60){
            this.segundos = 0
            this.minutos++;
            if(this.minutos == 60){
              this.minutos = 0;
              this.horas++;
              if(this.horas == 24){
                this.horas = 0;
              }
            }
      }
    }

    public getSegundos(): number{
      return this.segundos;
    }

    public setSegundos(segundos: number){
      this.segundos = segundos;
    }

    public getMinutos(): number{
      return this.minutos;
    }

    public setMinutos(minutos: number){
      this.minutos = minutos;
    }

    public getHoras(): number{
      return this.horas
    }

    public setHoras(horas: number){
      this.horas = horas;
    }

    public getContSeg(): number{
      return this.contSeg;
    }

   
    public setConSeg(seg: number){
      this.contSeg = seg;
    }

    resetTimer():void{
      this.setSegundos(0);
      this.setMinutos(0);
      this.setHoras(0);
      this.setConSeg(0);
      
     }
    

}
