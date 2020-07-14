import * as fromHome from '../home/store/home.reducer';
import * as fromCategory from '../catalog/category/store/category.reducer';
import * as fromHeader from '../header/store/header.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
    homeList: fromHome.State;
    categoryList: fromCategory.State;
    headerList: fromHeader.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    homeList: fromHome.homeReducer,
    categoryList: fromCategory.categoryReducer,
    headerList: fromHeader.headerReducer
};

export const getDataState = (state: AppState) => state.homeList;
