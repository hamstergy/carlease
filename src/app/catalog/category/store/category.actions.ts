import {Action} from '@ngrx/store';

import {Car} from '../../car.model';

export const STORE_CATEGORY_CARS_START = '[Category] Store Category Cars Start';
export const STORE_CATEGORY_CAR_SUCCESS = '[Category] Store Category Cars Success';
export const STORE_CATEGORY_CARS_ERROR = '[Category] Store Category Cars Error';

export class StoreCategoryCarsStart implements Action {
    readonly type = STORE_CATEGORY_CARS_START;
    constructor(public payload: string) {}
}
export class StoreCategoryCarsSuccess implements Action {
    readonly type = STORE_CATEGORY_CAR_SUCCESS;
    constructor(public payload: Car[]) {}
}
export class StoreCategoryCarsError implements Action {
    readonly type = STORE_CATEGORY_CARS_ERROR;
    constructor(public payload: {error: any}) {}
}

export type CategoryActions = StoreCategoryCarsStart | StoreCategoryCarsSuccess | StoreCategoryCarsError;
