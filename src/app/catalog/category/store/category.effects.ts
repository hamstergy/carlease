import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import * as CategoryActions from './category.actions';
import {map, switchMap} from 'rxjs/operators';
import {Car} from '../../car.model';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable()
export class CategoryEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}

    @Effect()
    storeCategoryCars = this.actions$.pipe(
        ofType(CategoryActions.STORE_CATEGORY_CARS_START),
        switchMap((action: CategoryActions.StoreCategoryCarsStart) => {
            const make = action.payload;
            return this.http.get<Car[]>(environment.apiUrl + '/api/getModels/byMake/' + make, {observe: 'body'});
        }),
        map( categoryCars => {
            return new CategoryActions.StoreCategoryCarsSuccess(categoryCars);
        })
    );
}
