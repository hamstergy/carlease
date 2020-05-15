import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Car} from './car.model';
import {Make} from './make.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Car[]>('http://carleaseback.test/api/allModels', {observe: 'body'}).pipe( map ( response => {
      return response;
    }));
  }
  getMakes() {
    return this.http.get<Make[]>('http://carleaseback.test/api/allMakes', {observe: 'body'}).pipe( map ( response => {
      return response;
    }));
  }
  getModelsByMake(slug: string, className: string) {
    let params = new HttpParams();
    if (className != '') {
      params = params.set('class', className);
    }
    return this.http.get<Car[]>('http://carleaseback.test/api/getModels/byMake/' + slug, {params, observe: 'body'})
        .pipe( map ( response => {
      return response;
    }));
  }

}

