
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Contacto } from 'models';

export interface ContactoState {
  contactos: EntityState<Contacto>;
  search: EntityState<Contacto>;
  selected: number;
  loaded: boolean;
}

export const contactosAdapter: EntityAdapter<Contacto> = createEntityAdapter<Contacto>({
  selectId: item => item.key
});

export const searchContactosAdapter: EntityAdapter<Contacto> = createEntityAdapter<Contacto>({
  selectId: item => item.key
});

