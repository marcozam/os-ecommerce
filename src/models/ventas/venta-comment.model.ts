import { BaseCatalog } from '../base-catalog.model';

export class VentaComment extends BaseCatalog {
    productoID: number;
    // use to group products
    moduleID = 1;

    constructor(public comentario: string) {
        super();
    }
}
