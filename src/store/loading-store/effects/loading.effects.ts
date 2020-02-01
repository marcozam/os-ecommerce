import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
// RxJS
import { tap, withLatestFrom } from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
import { LoadingModuleState } from '../state';
import { getIsLoading, getRequests } from '../selectors';
// Actions
import * as loadingActions from '../actions/loading.action';

@Injectable()
export class LoadingEffects {

    isLoading$ = this.store$.select(getIsLoading);
    requests$ = this.store$.select(getRequests);

    constructor(private actions$: Actions, private store$: Store<LoadingModuleState>) { }

    @Effect({ dispatch: false })
    startRequest$ = this.actions$.pipe(
        ofType(loadingActions.LOADING_ACTION_TYPES.START_REQUEST),
        withLatestFrom(this.isLoading$),
        tap(([ action, isLoading ]) => {
            if (!isLoading) {
                this.store$.dispatch(new loadingActions.ShowSpinner());
            }
        })
    );

    @Effect({ dispatch: false })
    endRequest$ = this.actions$.pipe(
        ofType(loadingActions.LOADING_ACTION_TYPES.END_REQUEST),
        withLatestFrom(this.requests$),
        tap(([ action, requests ]) => {
            if (requests <= 0 ) {
                this.store$.dispatch(new loadingActions.HideSpinner());
            }
        })
    );
}
