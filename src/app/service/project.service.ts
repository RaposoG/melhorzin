import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { tap, catchError, of } from 'rxjs'
import { Technologies } from '../types/Technology'
import { APIQuery, DataQuery } from './APIQuery'
import { Projects, ProjectsResponse } from '../types/Project'
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url =
    'https://raw.githubusercontent.com/leogues/portfolio/main/portfolio-data/projects.json'

  private http = inject(HttpClient)

  private projectsQuery = new APIQuery<Projects, Error>([])
  projetcs = new DataQuery(this.projectsQuery)

  fetchProjects() {
    this.projectsQuery.fetching()
    this.http
      .get<ProjectsResponse>(this.url)
      .pipe(
        tap((data) => this.projectsQuery.success(data.projects)),
        catchError((error) => {
          this.projectsQuery.fail(error)
          return of({} as Technologies)
        }),
      )
      .subscribe()
  }

  constructor() {
    this.fetchProjects()
  }
}
