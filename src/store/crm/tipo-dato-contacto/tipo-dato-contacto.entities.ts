
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TipoDatosContacto } from 'models/crm';

export interface TipoDatoContactoState extends EntityState<TipoDatosContacto> {
  loaded: boolean;
}

export const tipoDatoContactoAdapter: EntityAdapter<TipoDatosContacto> = createEntityAdapter<TipoDatosContacto>({
  selectId: item => item.key
});
