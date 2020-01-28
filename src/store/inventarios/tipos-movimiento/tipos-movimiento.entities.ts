import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TipoMovimientoInventario } from 'models/inventario';

export interface TiposMovimientoInventarioState extends EntityState<TipoMovimientoInventario> {
  loaded: boolean;
  selected: number;
}

export const tiposMovimientoInventarioAdapter: EntityAdapter<TipoMovimientoInventario> = createEntityAdapter<TipoMovimientoInventario>({
  selectId: item => item.key
});
