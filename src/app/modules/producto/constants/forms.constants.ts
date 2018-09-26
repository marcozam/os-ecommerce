import { Validators } from '@angular/forms';

export const CATEGORIA_PRODUCTO_FORM = {
    'nombre': ['', Validators.required],
    'catalogoID': [0, Validators.required],
    'usaInventario': [true, Validators.required],
    'requireProcesamiento': [false, Validators.required],
    'tieneGrupos': [false, Validators.required],
    'formatoNombre': ['']
};

export const MARCA_PRODUCTO_FORM = {
    'nombre': ['', Validators.required]
};

export const PRODUCTO_FORM = {
    'nombre': ['', Validators.required],
    'SKU': [''],
    'marcaProductoID': [0, Validators.required]
};
