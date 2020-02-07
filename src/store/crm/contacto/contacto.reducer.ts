import { createReducer, on } from '@ngrx/store';
import { contactosAdapter, searchContactosAdapter, ContactoState } from './contacto.entities';
import * as fromActions from './contacto.actions';

const initialState: ContactoState = {
  loaded: false,
  selected: null,
  contactos: contactosAdapter.getInitialState(),
  search: searchContactosAdapter.getInitialState(),
};

export const contactoReducer = createReducer(
  initialState,
  on(fromActions.SelectContactoAction, (state, { payload: selected }) => ({
    ...state,
    selected,
  })),
  on(fromActions.SaveContactoSuccessAction, fromActions.GetContactoSuccessAction,
    (state, { payload }) => ({
      ...state,
      selected: payload.key,
      contactos: contactosAdapter.upsertOne(payload, state.contactos)
    })
  ),
  on(fromActions.LoadContactosSuccessAction,
    (state, { payload }) => ({
      ...state,
      contactos: contactosAdapter.addAll(payload, state.contactos)
    })
  ),
  on(fromActions.LoadDatosContactoSuccessAction,
    (state, { payload }) => {
      const contacto = state.contactos.entities[state.selected];
      contacto.datos = payload;
      return {
        ...state,
        contactos: contactosAdapter.upsertOne(contacto, state.contactos)
      }
    }
  ),
  on(fromActions.SearchContactoSuccessAction,
    (state, { payload }) => ({
      ...state,
      search: searchContactosAdapter.addAll(payload, state.search),
      contactos: contactosAdapter.upsertMany(payload, state.contactos)
    })
  ),
);
