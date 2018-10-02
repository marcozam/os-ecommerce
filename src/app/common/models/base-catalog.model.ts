import { getFields } from '../decorators';

export interface IBaseCatalog {
    key: number;
    createdDate: Date;
    createdBy?: string;
    updatedDate?: Object;
    updatedBy?: string;
    hasChanges(compareWith: any): boolean;
}

export class BaseCatalog implements IBaseCatalog {
    key = 0;
    createdDate: Date;
    createdBy?: string;
    updatedDate?: Object;
    updatedBy?: string;

    constructor() { }

    hasChanges(compareWith: any): boolean {
        const fieldsMD = getFields(this);
        let retValue = false;
        fieldsMD.forEach(fld => {
            if (compareWith.hasOwnProperty(fld.propertyName)) {
                const _value = fld.converter(this[fld.propertyName]);
                const _value2Compare = fld.converter(compareWith[fld.propertyName]);
                if (_value !== _value2Compare) { retValue = true; }
            }
        });
        return retValue;
    }
}
