import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataPageService, private router: Router) { }

  ngOnInit(): void {
  }

  searchTechs(tech: string) {
    if (tech.length < 1) {
      return;
    }
    this.router.navigate(['/search', tech]);
  }

}
