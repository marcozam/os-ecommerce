import { BaseEntitie } from 'app/helpers';

export interface GeneralListState<T> {
    entities: BaseEntitie<T>;
    loaded: boolean;
    loading: boolean;
}
