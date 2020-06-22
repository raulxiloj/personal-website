import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  loading: boolean = true;
  projects: any = [];

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  private loadProjects() {
    this.http.get('https://angular-portafolio-87cb3.firebaseio.com/projects.json').subscribe(
      res => {
        this.projects = res;
        this.loading = false;
      }
    )
  }

}
