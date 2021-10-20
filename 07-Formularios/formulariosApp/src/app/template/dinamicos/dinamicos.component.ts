import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  nuevoJuego :string = '';

  persona : Persona ={
    nombre: 'Leandro',
    favoritos: [{id:1, nombre: 'metal slug'}, {id:2, nombre: 'doom'}]
  }

  guardar(){
    console.log('Formulario posteado');
  }


  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }

  agregarJuego(){
    const nuevoJuegoFavorito : Favorito = {id: this.persona.favoritos.length, nombre: this.nuevoJuego};

    this.persona.favoritos.push({...nuevoJuegoFavorito});

    this.nuevoJuego = '';

  }
 

}
