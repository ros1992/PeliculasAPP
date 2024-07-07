import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BuscarPeli, MoviesMBD, PeliculaDetalle, RespuestaActores} from "../interfaces/moviesMBD";

@Injectable({
  providedIn: 'root'
})
export class ServicesPeliculasService {

  private apikey = environment.apikey;
  private url = environment.apiurl;
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.apikey}`,
    'Content-Type': 'application/json'
  })
  private pagePopulare = 0;

  constructor(private serviceMovie: HttpClient) {
  }

  getPopular() {
    this.pagePopulare++;
    const apiUrl = `${this.url}movie/now_playing?language=en-US&page=${this.pagePopulare}&include_image_language=es`;
    return this.serviceMovie.get<MoviesMBD>(apiUrl, {headers: this.headers});
  }

  getFeature() {
    const releaseStartDate = '2023-01-01';
    const releaseEndDate = '2024-06-24';
    const apiUrl = `${this.url}discover/movie?language=es&release_date.gte=${releaseStartDate}&release_date.lte=${releaseEndDate}&include_image_language=es`;
    return this.serviceMovie.get<MoviesMBD>(apiUrl, {headers: this.headers});
  }

  getDetalle(id: string){
    const apiUrl = `${this.url}movie/${id}?language=es`;
    return this.serviceMovie.get<PeliculaDetalle>(apiUrl, {headers: this.headers});
  }

  getactores(id: string){
    const apiUrl = `${this.url}movie/${id}/credits?language=es`;
    return this.serviceMovie.get<RespuestaActores>(apiUrl, {headers: this.headers});
  }

  getBuscarPeli(name: string){
    const apiUrl = `${this.url}search/movie?query=${name}&language=es`;
    return this.serviceMovie.get<BuscarPeli>(apiUrl, {headers: this.headers});
  }
}
