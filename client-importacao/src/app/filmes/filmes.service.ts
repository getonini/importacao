import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private baseURL: string = "http://localhost:8080/importElastic/list/filmes";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers })

  constructor(private _http: Http) { }

  getFilmes() {

    let item;
    item = this._http.get(this.baseURL,
      this.options).pipe(map(res => res.json()));

    return [item, 'Teste2', 'Teste3'];
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }

}
