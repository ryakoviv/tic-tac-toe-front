import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ENDPOINT_GAME = '/api/v1/games';
  readonly BASE_URL = 'http://api.tic-tac-toe.localhost:88';

  constructor(private http: HttpClient) { }

  public create(): Observable<Game>
  {
    return this.http.post<Game>(
      this.getUrl(this.ENDPOINT_GAME),
      null,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public move(id: string, board: string): Observable<Game>
  {
    return this.http.put<Game>(
      this.getUrl(this.ENDPOINT_GAME) + '/' + id,
      {board},
      {
        headers: this.getHeaders(),
      }
    );
  }

  public get(id: string): Observable<Game>
  {
    return this.http.get<Game>(
      this.getUrl(this.ENDPOINT_GAME) + '/' + id,
      {
        headers: this.getHeaders(),
      }
    );
  }

  private getUrl(endpoint: string): string
  {
    return this.BASE_URL + endpoint;
  }

  private getHeaders(): HttpHeaders
  {
    return new HttpHeaders(
      {'Content-Type': 'application/json'}
    );
  }
}
