import {Action} from '@ngrx/store';

import {Car} from '../../catalog/car.model';

export const STORE_CARS_START = '[Home] Store Cars Start';
export const STORE_CAR_SUCCESS = '[Home] Store Cars Success';
export const STORE_CARS_ERROR = '[Home] Store Cars Error';

export class StoreCarsStart implements Action {
    readonly type = STORE_CARS_START;
}

export class StoreCarsSuccess implements Action {
    readonly type = STORE_CAR_SUCCESS;
    constructor(public payload: Car[]) {}
}

export class StoreCarsError implements Action {
    readonly type = STORE_CARS_ERROR;
    constructor(public payload: {error: any}) {}
}

export type HomeActions = StoreCarsStart | StoreCarsSuccess | StoreCarsError;
