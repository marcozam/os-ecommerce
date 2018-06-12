export * from './categorias-list.guard';
export * from './productos-list.guard';
export * from './marcas-list.guard';
export * from './categoria-detail.guard';
export * from './marca-detail.guard';

import { CategoriasListGuard } from './categorias-list.guard';
import { MarcasListGuard } from './marcas-list.guard';
import { ProductosListGuard } from './productos-list.guard';
import { CategoriaDetailGuard } from './categoria-detail.guard';
import { MarcaDetailGuard } from './marca-detail.guard';

import { ProductosDataManagerService } from './data-manager.service';

export const guards = [
    ProductosDataManagerService,
    CategoriasListGuard,
    CategoriaDetailGuard,
    ProductosListGuard,
    MarcasListGuard,
    MarcaDetailGuard
];
