import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';

@Injectable()
export class DbzService{

    private _personajes : Personaje[] = [
        {
          nombre:'Piccolo',
          poder:500
    
        },
        {
          nombre:'Maestro roggi',
          poder: 100
        }
      ];


    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){}   

    agregarPersonaje(personaje : Personaje)}{
        this._personajes.push(personaje);
    }
    
    
}