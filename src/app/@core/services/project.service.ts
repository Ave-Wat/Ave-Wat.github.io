import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, of } from 'rxjs';
import { Project } from '../../@core/models/project';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  // Note: find a good free way to host a server instead of storing info in a .json file.
  getProjects() : Observable<Project[]>
  {
    return this.httpClient
      .get<Project[]>("/assets/data/projects.json")
      .pipe(catchError(this.handleError));
  }

  handleError(error: any, caught: Observable<Project[]>) : ObservableInput<any> {
    return of([]);
  }

}