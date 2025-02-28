import { Injectable, inject } from '@angular/core'
import { APIQuery, DataQuery } from './APIQuery'
import { HttpClient } from '@angular/common/http'
import { tap, catchError, throwError, of } from 'rxjs'
import { Technologies } from '../types/Technology'

@Injectable({
  providedIn: 'root',
})
export class TechService {
  private url =
    'https://raw.githubusercontent.com/leogues/portfolio/main/portfolio-data/techs.json'
  private http = inject(HttpClient)

  private techsQuery = new APIQuery<Technologies, Error>({})
  techs = new DataQuery(this.techsQuery)

  fetchTechs() {
    this.techsQuery.fetching()
    this.http
      .get<Technologies>(this.url)
      .pipe(
        tap((data) => this.techsQuery.success(data)),
        catchError((error) => {
          this.techsQuery.fail(error)
          return of({} as Technologies)
        }),
      )
      .subscribe()
  }

  constructor() {
    this.fetchTechs()
  }
}
