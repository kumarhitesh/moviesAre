import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetThelistService {
  public apikey = 'dbd554ad920088da7ff8927502f080c5';
  public apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=dbd554ad920088da7ff8927502f080c5';
  constructor(private http: HttpClient) { }

  public getTheData() {
    return this.http.get(this.apiUrl);
  }

}
