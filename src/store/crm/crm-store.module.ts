import { NgModule } from '@angular/core';
// NgRx
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName, CRMModuleState } from './constants';
// Services
import { PersonasService } from 'services/http/base';
import {
  ContactoService,
  DatosContactoService,
  TipoDatoContactoService,
} from 'services/http/crm';

import { ContactoEffects, contactoReducer, ContactoState } from './contacto';
import { TipoDatoContactoEffects, tipoDatoContactoReducer, TipoDatoContactoState } from './tipo-dato-contacto';

const reducers: ActionReducerMap<CRMModuleState> = {
  contactos: (state: ContactoState, action: Action) => contactoReducer(state, action),
  tipoDatoContacto: (state: TipoDatoContactoState, action: Action) => tipoDatoContactoReducer(state, action),
};

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([
      ContactoEffects,
      TipoDatoContactoEffects
    ])
  ],
  providers: [
    PersonasService,
    ContactoService,
    DatosContactoService,
    TipoDatoContactoService,
  ],
})
export class CRMStoreModule { }

