import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import * as CategoryActions from './category.actions';
import {map, switchMap} from 'rxjs/operators';
import {Car} from '../../car.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CategoryEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}

    @Effect()
    storeCategoryCars = this.actions$.pipe(
        ofType(CategoryActions.STORE_CATEGORY_CARS_START),
        switchMap((action: CategoryActions.StoreCategoryCarsStart) => {
            console.log(action.payload);
            const make = action.payload;
            return this.http.get<Car[]>('http://carleaseback.test/api/getModels/byMake/' + make, {observe: 'body'});
        }),
        map( categoryCars => {
            return new CategoryActions.StoreCategoryCarsSuccess(categoryCars);
        })
    );
}
