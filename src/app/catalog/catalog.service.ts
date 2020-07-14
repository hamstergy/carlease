import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Car} from './car.model';
import {Make} from './make.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  className = '';

  constructor(private http: HttpClient) { }

  setClassName(className) {
    this.className = className;
  }
  getClassName() {
    return this.className;
  }
  getMakes() {
    return this.http.get<Make[]>('http://carleaseback.test/api/allMakes', {observe: 'body'}).pipe( map ( response => {
      return response;
    }));
  }
  // getModelsByMake(slug: string, ) {
  //   return this.http.get<Car[]>('http://carleaseback.test/api/getModels/byMake/' + slug, {observe: 'body'})
  //       .pipe( map ( response => {
  //     return response;
  //   }));
  // }
}
