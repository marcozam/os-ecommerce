import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CategoriaProducto } from 'models/productos';

export interface CategoriasState extends EntityState<CategoriaProducto> {
  loaded: boolean;
  selected: number;
}

export const categoriasAdapter: EntityAdapter<CategoriaProducto> = createEntityAdapter<CategoriaProducto>({
  selectId: item => item.key
});
