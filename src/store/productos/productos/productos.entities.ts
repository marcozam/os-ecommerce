import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Producto } from 'models/productos';

export interface ProducstosState extends EntityState<Producto> {
  loaded: boolean;
  selected: number;
}

export const productosAdapter: EntityAdapter<Producto> = createEntityAdapter<Producto>({
  selectId: item => item.key
});
