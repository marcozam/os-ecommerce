import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoadingModuleState } from '../state';

export const getLoadingModuleState = createFeatureSelector<LoadingModuleState>('loading');

export const getIsLoading = createSelector(
    getLoadingModuleState,
    (state: LoadingModuleState) => state.loading
);

export const getRequests = createSelector(
    getLoadingModuleState,
    (state: LoadingModuleState) => state.requests
);
