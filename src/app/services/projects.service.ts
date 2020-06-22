import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  loading: boolean = true;
  projects: any = [];
  projectsFilter: any = [];

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  private loadProjects() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-portafolio-87cb3.firebaseio.com/projects.json').subscribe(
        res => {
          this.projects = res;
          this.loading = false;
          resolve();
        }
      )
    });
  }

  getProject(index) {
    return this.http.get(`https://angular-portafolio-87cb3.firebaseio.com/projects/${index}.json`);
  }

  searchProject(tech) {
    if (this.projects.length === 0) {
      this.loadProjects().then(() => {
        //execute after having projects
      })
    } else {
      this.filterProjects(tech);
    }
  }

  private filterProjects(tech: string) {
    this.projectsFilter = [];
    tech = tech.toLowerCase();
    this.projects.forEach(project => {
      for (const t of project.techs) {
        const auxT = t.toLowerCase();
        if (auxT.indexOf(tech) >= 0) {
          this.projectsFilter.push(project);
        }
      }
    });
  }

}
