export * from './data-manager.service';
export * from './marca-detail.resolver';
export * from './marcas-list.resolver';
export * from './categoria-detail.resolver';
export * from './categorias-list.resolver';
export * from './productos-list.resolver';
export * from './producto-detail.resolver';

import { ProductosDataManagerService } from './data-manager.service';
import { MarcaDetailResolver } from './marca-detail.resolver';
import { MarcasListResolver } from './marcas-list.resolver';
import { CategoriaDetailResolver } from './categoria-detail.resolver';
import { CategoriasListResolver } from './categorias-list.resolver';
import { ProductosListResolver } from './productos-list.resolver';
import { ProductosDetailResolver } from './producto-detail.resolver';

export const resolvers = [
    ProductosDataManagerService,
    MarcaDetailResolver,
    MarcasListResolver,
    CategoriaDetailResolver,
    CategoriasListResolver,
    ProductosListResolver,
    ProductosDetailResolver
];
