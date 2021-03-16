import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';

import {map, catchError, switchMap} from 'rxjs/operators';
import * as HomeActions from './home.actions';
import {Car} from '../../catalog/car.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}

    @Effect()
    storeCars = this.actions$.pipe(
        ofType(HomeActions.STORE_CARS_START),
        switchMap(() => {
            return this.http.get<Car[]>(environment.apiUrl + '/api/allModels');
        }),
        map(cars => {
            return new HomeActions.StoreCarsSuccess(cars);
        })
    );
}
