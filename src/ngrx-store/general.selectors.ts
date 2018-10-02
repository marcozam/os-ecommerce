import { IBaseCatalog, BaseEntitie } from 'app/common';
import * as fromHelpers from 'app/common/utilities';

import { GeneralListState } from './general.states';

export function getData<T extends IBaseCatalog>(state: GeneralListState<T>) {
    return entitie2List(state);
}

export function getEntities<T extends IBaseCatalog>(state: GeneralListState<T>) {
    return state.entities;
}

export function getLoaded<T>(state: GeneralListState<T>) {
    return state.loaded;
}

export function getLoading<T>(state: GeneralListState<T>) {
    return state.loading;
}

export function geSelectedtItem<T extends IBaseCatalog>(entities: BaseEntitie<T>, router, ID: string): T {
    return router.state && entities[router.state.params[ID]];
}

export function data2Entities<T extends IBaseCatalog>(list: T[], state: GeneralListState<T>) {
    return fromHelpers.data2Entities<T>(list, 'key', state.entities);
}

export function entitie2List<T extends IBaseCatalog>(state: GeneralListState<T>): T[] {
    return fromHelpers.entitie2List<T>(state.entities);
}
