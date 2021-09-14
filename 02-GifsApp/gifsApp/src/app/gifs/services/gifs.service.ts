import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

    private apiKey:string = 'lUGkBcWYsGgn7LJluVnJuAn3qCQlWNzy';

    private _historial: string[]=[];
    
    //Todo
    public resultados: Gif [] = [];

    private servicioUrl : string = 'http://api.giphy.com/v1/gifs';

    get historial (){
      //Los 3 puntos rompen la referencia para no devolver el arreglo original
    
      return [...this._historial];
    }

    constructor( private http: HttpClient){
      
        
      this._historial= JSON.parse (localStorage.getItem('historial')!) || [];
      this.resultados= JSON.parse (localStorage.getItem('resultados')!) || [];
        

    }

    buscarGifs( query: string){
        
        query = query.trim().toLowerCase();

        if(!this._historial.includes(query)){
          this._historial.unshift(query);
          this._historial = this._historial.splice(0,10);

          localStorage.setItem('historial', JSON.stringify(this._historial));
        }

        const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit','10')
          .set('query', query);
       
        this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?api_key=lUGkBcWYsGgn7LJluVnJuAn3qCQlWNzy&q=${query}&limit=10`)
          .subscribe( (resp: SearchGifsResponse) =>{
            this.resultados = resp.data;
            localStorage.setItem('resultados', JSON.stringify(this.resultados));
          });
    }

}
