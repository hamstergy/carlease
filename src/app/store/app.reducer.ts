import * as fromHome from '../home/store/home.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
    homeList: fromHome.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    homeList: fromHome.homeReducer
};

export const getDataState = (state: AppState) => state.homeList;
