import { createAction, props } from '@ngrx/store';
import { CicloEscolar, Plantel, SeccionEscolar } from '../models';

export const CargarCiclosEscolares = createAction('[School] Cargar Ciclos Escolares');
export const EstablecerCiclosEscolares = createAction('[School] Establecer Ciclos Escolares', props<{payload: CicloEscolar[]}>());
export const SeleccionarCicloEscolar = createAction('[School] Seleccionar Ciclo Escolar', props<{payload: string}>());

export const CargarPlanteles = createAction('[School] Cargar Planteles');
export const EstablecerPlanteles = createAction('[School] Establecer Planteles', props<{payload: Plantel[]}>());
export const SeleccionarPlantel = createAction('[School] Seleccionar Plantel', props<{payload: string}>());

export const CargarSeccionesEscolares = createAction('[School] Cargar Secciones Escolares');
export const EstablecerSeccionesEscolares = createAction('[School] Establecer Secciones Escolares', props<{payload: SeccionEscolar[]}>());
