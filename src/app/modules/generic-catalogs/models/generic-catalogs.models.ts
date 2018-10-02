import { GenericCatalog } from 'app/common';

export interface FieldProperty {
    key: number;
    propertyName: string;
    propertyType?: string;
    serverField: string;
    sendField: string;
    converter: any;
}

export class Sucursal extends GenericCatalog {
    companyName = 'OPTIKA INFANTIL';
}
