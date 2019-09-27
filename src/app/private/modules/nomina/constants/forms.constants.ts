import { Validators } from '@angular/forms';

export const CATEGORIA_PRODUCTO_FORM = {
    'NoEmpleado': ['', Validators.required],
    'catalogoID': [0, Validators.required],
    'usaInventario': [true, Validators.required],
    'requireProcesamiento': [false, Validators.required],
    'tieneGrupos': [false, Validators.required],
    'formatoNombre': ['']
};
