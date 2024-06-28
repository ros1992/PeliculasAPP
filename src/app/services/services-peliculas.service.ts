import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MoviesMBD} from "../interfaces/moviesMBD";

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

  constructor(private serviceMovie: HttpClient) {
  }

  getFeature() {
    const releaseStartDate = '2023-01-01';
    const releaseEndDate = '2024-06-24';
    const apiUrl = `${this.url}discover/movie?language=es&release_date.gte=${releaseStartDate}&release_date.lte=${releaseEndDate}&include_image_language=es`;
    return this.serviceMovie.get<MoviesMBD>(apiUrl, {headers: this.headers});
  }
}
