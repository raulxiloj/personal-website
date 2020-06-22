import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public projectService: ProjectsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.projectService.searchProject(params['tech']);
      }
    )
  }

}
