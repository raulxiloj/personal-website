import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor(public dataService: DataPageService) { }

  ngOnInit(): void {
  }

}
