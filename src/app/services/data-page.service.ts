import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataPage } from '../models/dataPage.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPageService {

  data: dataPage = {};
  loaded: boolean = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/page-data.json').subscribe(
      (res: dataPage) => {
        this.loaded = true;
        this.data = res;
      }
    )
  }
}
