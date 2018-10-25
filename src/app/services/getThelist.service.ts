import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetThelistService {
  public apikey = 'dbd554ad920088da7ff8927502f080c5';

  constructor(private http: HttpClient) { }

  public getTheData() {
    const url: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.apikey + '&language=en-US&page=1';
    return this.http.get(url);
  }
  public getTheFilterData(searchedWord) {
    const url: string = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.apikey + '&query=' + searchedWord;
    return this.http.get(url);
  }

  public getSetectedmovieData(movieId) {
    const url: string = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this.apikey + '&language=en-US';
    return this.http.get(url);
  }
}
