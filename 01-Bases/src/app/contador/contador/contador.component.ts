import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <button (click)="acumular(1)"> +1 </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-1)"> -1 </button>
    `
})
export class ContadorComponent{

    title = 'Este es un titulo dinamico';
    numero: number = 10;
  
    sumar(){
      this.numero+=1;
    }
  
    restar(){
      this.numero-=1;
    }
  
    acumular(valor:number){
      this.numero += valor;
    }

}