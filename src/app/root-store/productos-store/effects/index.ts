import { CategoriasEffects } from './categorias.effect';
import { ProductosEffects } from './productos.effects';
import { MarcasEffects } from './marcas.effects';

export const effects: any[] = [
    CategoriasEffects,
    ProductosEffects,
    MarcasEffects
];

export * from './categorias.effect';
export * from './productos.effects';
export * from './marcas.effects';
