import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl = 'https://api.themoviedb.org/3/list/1?api_key=0289a624c338b19ee60717ae0bc39ab1'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get(this.movieUrl);
  }
}
