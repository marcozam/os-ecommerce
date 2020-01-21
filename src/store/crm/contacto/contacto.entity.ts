
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Persona } from 'models';

export interface State extends EntityState<Persona> {
    loaded: boolean;
}

export const adapter: EntityAdapter<Persona> = createEntityAdapter<Persona>({
    selectId: item => item.key
});
