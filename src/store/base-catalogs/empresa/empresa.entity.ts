
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Empresa } from 'models';

export interface State extends EntityState<Empresa> {
  loaded: boolean;
}

export const adapter: EntityAdapter<Empresa> = createEntityAdapter<Empresa>({
  selectId: item => item.key
});
