import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as HomeActions from './store/home.actions';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private store: Store, private http: HttpClient) {}

  // getAll() {
  //   return this.http.get<Car[]>('http://carleaseback.test/api/allModels', {observe: 'body'}).pipe( map ( response => {
  //     return response;
  //   }));
  // }

  onLoad() {
    this.store.dispatch(new HomeActions.StoreCarsStart());
  }

}
