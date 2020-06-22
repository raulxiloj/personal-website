import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  project: any = {};

  constructor(private route: ActivatedRoute, public projectService: ProjectsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        console.log(params['index'])
        this.projectService.getProject(params['index']).subscribe(
          project => {
            this.project = project;
          }
        )
      }
    )
  }

}
