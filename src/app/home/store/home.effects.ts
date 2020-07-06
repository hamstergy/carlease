import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';

import {map, catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as HomeActions from './home.actions';
import {HomeService} from '../home.service';
import {Car} from '../../catalog/car.model';

@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions, private http: HttpClient, private homeService: HomeService ) {}

    @Effect()
    storeCars = this.actions$.pipe(
        ofType(HomeActions.STORE_CARS_START),
        switchMap(() => {
            return this.http.get<Car[]>('http://carleaseback.test/api/allModels');
        }),
        map(cars => {
            return new HomeActions.StoreCarsSuccess(cars);
        })
    );
}
