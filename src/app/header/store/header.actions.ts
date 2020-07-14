import {Action} from '@ngrx/store';

export const STORE_FILTER_SEGMENT = '[Header] Store Filter Segment';
export class StoreFilterSegment implements Action {
    readonly type = STORE_FILTER_SEGMENT;
    constructor(public payload: string) {}
}

export type HeaderActions = StoreFilterSegment;
