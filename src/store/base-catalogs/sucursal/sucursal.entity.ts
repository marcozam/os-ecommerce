
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Sucursal } from 'models';

export interface State extends EntityState<Sucursal> {
  loaded: boolean;
  selected: number;
}

export const adapter: EntityAdapter<Sucursal> = createEntityAdapter<Sucursal>({
  selectId: item => item.key
});
