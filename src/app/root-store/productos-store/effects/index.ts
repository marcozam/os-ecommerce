export * from './categorias.effects';
export * from './productos.effects';
export * from './marcas.effects';

import { CategoriasEffects } from './categorias.effects';
import { ProductosEffects } from './productos.effects';
import { MarcasEffects } from './marcas.effects';
import { ErrorHandlerEffects } from './error-handler.effects';

export const effects: any[] = [
    CategoriasEffects,
    ProductosEffects,
    MarcasEffects,
    ErrorHandlerEffects
];
