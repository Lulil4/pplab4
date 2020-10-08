import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pokemon } from "../classes/pokemon";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datos:any = {};
  
  constructor(private httpClient: HttpClient) { }

  getPokemones(): Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/`);
  }

  getPokemonByName(name: string): Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getDatos(){
    return this.datos;
  }

  setDatos(value: Pokemon){
    this.datos = value;
  }

  getHabilidad(url){
    return this.httpClient.get<any>(url);
  }

  getPages(url="https://pokeapi.co/api/v2/pokemon/"){
    return this.httpClient.get(url);
  }
}
