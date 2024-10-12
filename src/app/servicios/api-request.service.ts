import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  http = inject(HttpClient);
  api_url = "";

  constructor() { }

  obtenerPaises(){
    const url = "https://restcountries.com/v3.1/all?fields=name" //trae solo los nombres de todos los paises
    const peticion = this.http.get(url, {
      responseType: 'json'
    })
    return peticion;
  }

  obtenerDetallePais(pais:string){
    const url = `https://restcountries.com/v3.1/name/${pais}`; //trae toda la info del pais
    const peticion = this.http.get(url, {
      responseType: 'json'
    })
    return peticion;
  }
}
