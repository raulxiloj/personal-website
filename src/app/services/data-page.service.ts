import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataPage } from '../models/dataPage.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPageService {

  data: dataPage = {};
  myData: any = {};
  mySkills: any = [];
  loaded: boolean = false;

  constructor(private http: HttpClient) {
    this.loadData();
    this.loadPersonalData();
    this.loadSkills();
  }

  private loadData() {
    this.http.get('assets/data/page-data.json').subscribe(
      (res: dataPage) => {
        this.loaded = true;
        this.data = res;
      }
    )
  }

  private loadPersonalData() {
    this.http.get('https://angular-portafolio-87cb3.firebaseio.com/team.json').subscribe(
      res => {
        this.myData = res[0];
      }
    );
  }

  private loadSkills() {
    this.http.get('https://angular-portafolio-87cb3.firebaseio.com/skills.json').subscribe(
      res => {
        this.mySkills = res;
      }
    )
  }

}
