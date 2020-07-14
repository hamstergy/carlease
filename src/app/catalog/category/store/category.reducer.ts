import { Car } from '../../car.model';
import * as fromCategory from './category.actions';

export interface State {
    categoryCars: Car[];
    category: string;
    loading: boolean;
    error: any;
}

const initialState: State = {
    categoryCars: [],
    category: 'Honda',
    loading: false,
    error: null
}
export function categoryReducer(
    state: State = initialState,
    action: fromCategory.CategoryActions
) {
    switch (action.type) {
        case fromCategory.STORE_CATEGORY_CARS_START: {
            return {
                ...state,
                category: action.payload,
                loading: true,
                error: null
            };
        }
        case fromCategory.STORE_CATEGORY_CAR_SUCCESS: {
            return {
                ...state,
                loading: false,
                categoryCars: action.payload
            };
        }
        case fromCategory.STORE_CATEGORY_CARS_ERROR: {
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
