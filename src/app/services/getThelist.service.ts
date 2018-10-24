import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetThelistService {

  constructor(private http: HttpClient) { }

  public getTheData() {
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=dbd554ad920088da7ff8927502f080c5');
  }
  public getTheFilterData(searchedWord) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=dbd554ad920088da7ff8927502f080c5&query=' + searchedWord);
  }

  public getSetectedmovieData(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=dbd554ad920088da7ff8927502f080c5&language=en-US');
  }
}
