import {Action} from '@ngrx/store';

import {Car} from '../../car.model';

export const STORE_CAR_MODEL_START = '[Model] Store Car Model Start';
export const STORE_CAR_MODEL_SUCCESS = '[Model] Store Car Model Success';
export const STORE_CAR_MODEL_ERROR = '[Model] Store Car Model Error';

export class StoreCarModelStart implements Action {
    readonly type = STORE_CAR_MODEL_START;
    constructor(public payload: {make: string, model: string}) {}
}

export class StoreCarModelSuccess implements Action {
    readonly type = STORE_CAR_MODEL_SUCCESS;
    constructor(public payload: {model: Car, make: string}) {}
}

export class StoreCarModelError implements Action {
    readonly type = STORE_CAR_MODEL_ERROR;
    constructor(public payload: {error: any}) {}
}

export type ModelActions = StoreCarModelStart | StoreCarModelSuccess | StoreCarModelError;
