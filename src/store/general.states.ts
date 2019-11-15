import { BaseEntitie } from 'app/common/utilities';

export interface GeneralListState<T> {
    entities: BaseEntitie<T>;
    loaded: boolean;
}
