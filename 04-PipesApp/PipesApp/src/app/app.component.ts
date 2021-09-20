import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private primeNgConfig : PrimeNGConfig ){
  }

  ngOnInit(){

      this.primeNgConfig.ripple=true;
  }
  
  title = 'PipesApp';

  nombre: string = 'leAnDro eGuIa';

  mostrarNombre(){
    console.log(this.nombre);
  }

  


}
