import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MarcaProducto } from 'models/productos';

export interface MarcasState extends EntityState<MarcaProducto> {
  loaded: boolean;
  selected: number;
}

export const marcasAdapter: EntityAdapter<MarcaProducto> = createEntityAdapter<MarcaProducto>({
  selectId: item => item.key
});
