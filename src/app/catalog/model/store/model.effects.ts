import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as ModelActions from './model.actions';
import {map, switchMap} from 'rxjs/operators';
import {Car} from '../../car.model';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ModelEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}

    @Effect()
    storeCarModel = this.actions$.pipe(
        ofType(ModelActions.STORE_CAR_MODEL_START),
        switchMap((action: ModelActions.StoreCarModelStart) => {
            const make = action.payload.make;
            const model = action.payload.model;
            return this.http
                .get<{model: Car, make: string}>(environment.apiUrl + '/api/getModel/' + make + '/' + model, {observe: 'body'});
        }),
        map( modelCar => {
            return new ModelActions.StoreCarModelSuccess(modelCar);
        })
    );
}
