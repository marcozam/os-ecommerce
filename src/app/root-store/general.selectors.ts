import * as fromHelpers from 'app/helpers';
import { GeneralListState } from './general.states';
// Move somewhere else
import { BaseGenericCatalog } from '../modules/base/models/base.models';
import { BaseEntitie } from 'app/helpers';

export function getData<T extends BaseGenericCatalog>(state: GeneralListState<T>) {
    return entitie2List(state);
}

export function getEntities<T extends BaseGenericCatalog>(state: GeneralListState<T>) {
    return state.entities;
}

export function getLoaded<T>(state: GeneralListState<T>) {
    return state.loaded;
}

export function getLoading<T>(state: GeneralListState<T>) {
    return state.loading;
}

export function geSelectedtItem<T extends BaseGenericCatalog>(entities: BaseEntitie<T>, router, ID: string): T {
    return router.state && entities[router.state.params[ID]];
}

export function data2Entities<T extends BaseGenericCatalog>(list: T[], state: GeneralListState<T>) {
    return fromHelpers.data2Entities<T>(list, 'key', state.entities);
}

export function entitie2List<T extends BaseGenericCatalog>(state: GeneralListState<T>): T[] {
    return fromHelpers.entitie2List<T>(state.entities);
}
