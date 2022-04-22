import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap, map } from 'rxjs/operators';

import { IHeroes } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private HeroUrl = 'api/heroes/heroes.json';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<IHeroes[]> {
    return this.http.get<IHeroes[]>(this.HeroUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
      );
  }

  getHeroe(id: number): Observable<IHeroes | undefined> {
    return this.getHeroes()
      .pipe(
        map((heroes: IHeroes[]) => heroes.find(p => p.Id === id))
      );
  }

}
