import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class OSPaginatorIntl extends MatPaginatorIntl {
    nextPageLabel = 'Siguiente';
    previousPageLabel = 'Anterior';
    lastPageLabel = 'Ultima';
    firstPageLabel = 'Primera';
    itemsPerPageLabel = 'Filas por pagina';
    getRangeLabel = (page: number, pageSize: number, length: number) => {
        const start = (page * pageSize) + 1;
        const end = (page + 1) * pageSize;
        return `${start}-${end > length ? length : end} de ${length}`;
    }
}
