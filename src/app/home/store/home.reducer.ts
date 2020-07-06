import { Car } from '../../catalog/car.model';
import * as fromHome from './home.actions';

export interface State {
    cars: Car[];
    loading: boolean;
    error: any;
}

const initialState: State = {
    cars: [],
    loading: false,
    error: null
}
export function homeReducer(
    state: State = initialState,
    action: fromHome.HomeActions
) {
    switch (action.type) {
        case fromHome.STORE_CARS_START: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromHome.STORE_CAR_SUCCESS: {
            return {
                ...state,
                loading: false,
                cars: action.payload
            };
        }
        case fromHome.STORE_CARS_ERROR: {
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
