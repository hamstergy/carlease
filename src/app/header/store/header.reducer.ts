import * as fromHeader from './header.actions';
export interface State {
    segment: string;
}

const initialState: State = {
    segment: null
}

export function headerReducer(
    state: State = initialState,
    action: fromHeader.HeaderActions) {
    switch (action.type) {
        case fromHeader.STORE_FILTER_SEGMENT: {
            return {
                ...state,
                segment: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
