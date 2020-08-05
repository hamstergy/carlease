import {Car} from '../../car.model';
import * as fromModel from './model.actions';

export interface State {
    make: string;
    model: Car;
    loading: boolean;
    error: any;
}

const initialState: State = {
    make: 'Toyota',
    model: {},
    loading: true,
    error: null
};

export function ModelReducer(
    state: State = initialState,
    action: fromModel.ModelActions
) {
    switch (action.type) {
        case fromModel.STORE_CAR_MODEL_START: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromModel.STORE_CAR_MODEL_SUCCESS: {
            return {
                ...state,
                loading: false,
                model: action.payload.model,
                make: action.payload.make
            };
        }
        case fromModel.STORE_CAR_MODEL_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}
