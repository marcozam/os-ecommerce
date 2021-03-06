import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';

export class MetaDataTable extends BaseCatalog {
    @Field('C1') name: string;
    @Field('C2') scheme: string;
}

export class MetaDataColumn extends BaseCatalog {
    @Field('C1') name: string;
    @Field('C2') dbType: string;
    @Field('C3') maxLength: number;
    @Field('C4') isNullable: boolean;
    @Field('C5') position: number;
    @Field('R1') tipoCampoID: number;
    @Field('R2') tipoDatoID: number;
}

export class MetaDataCatalog extends BaseCatalog {
    // SQL
    @Field('C1', 10001) nombre: string;
    @Field('C3', 10004) dynamic = true;
    @Field('C4', 10003) tableName?: string;
    @Field('C5', 10005) filterAccount = false;
    @Field('C6', 10006) detailURL?: string;
    @Field('C7', 10007) listURL?: string;

    // Fields
    fields?: MetaDataField[] = [];

    constructor() {
        super();
        this.key = 0;
        this.tableName = '';
        // this.keysChanges = ['nombre', 'tableName', 'dynamic', 'detailURL', 'listURL'];
    }
}

export class MetaDataField extends BaseCatalog {
    @Field('C1') nombre: string;
    @Field('C2') nombreCorto: string;
    @Field('C3') tipoCampoID: number;
    @Field('C4') catalogoReferenciaID: number;
    @Field('C5') displayMember: string;
    @Field('C6') required: boolean;
    @Field('C7') orden: number;
    @Field('C8') visible: boolean;
    @Field('C9') fieldName: string;
    // C10
    // C11
    @Field('C13') catalogoID: number;
    isNew = true;
}

export class MetaDataFieldType extends BaseCatalog {
    @Field('C1') name: string;
}
