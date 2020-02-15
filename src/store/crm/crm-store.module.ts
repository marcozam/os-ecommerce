import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName } from './constants';
// Services
import { PersonasService } from 'services/http/base';
import {
  ContactoService,
  DatosContactoService,
  TipoDatoContactoService,
} from 'services/http/crm';

import { ContactoEffects, contactoReducer } from './contacto';
import { TipoDatoContactoEffects, tipoDatoContactoReducer } from './tipo-dato-contacto';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, {
      contactos: contactoReducer,
      tipoDatoContacto: tipoDatoContactoReducer,
    }),
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

