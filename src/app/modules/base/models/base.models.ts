import { Field } from 'app/modules/generic-catalogs/decorator/dynamic-catalog.decorator';

export class BaseGenericCatalog {
    key = 0;

    keysChanges: string[] = [];

    createdDate: Object;
    createdBy?: string;
    updatedDate?: Object;
    updatedBy?: string;

    constructor() { }

    hasChanges(compareWith: any): boolean {
        let response: boolean = this.keysChanges.length === 0;
        this.keysChanges.forEach(key => {
            response = this[key] !== compareWith[key] ? true : response;
        });
        return response;
    }
}

export class GenericCatalog extends BaseGenericCatalog {
    @Field('C1') nombre: string;

    constructor(key?: number, nombre?: string) {
        super();
        this.keysChanges = ['nombre'];
        this.key = key ? key : 0;
        this.nombre = nombre ? nombre : null;
    }
}

export class GrupoStatus extends BaseGenericCatalog {
    @Field('C1', 8601) nombre: string;
    constructor() {
        super();
        this.keysChanges = ['nombre'];
    }
}

export class Status extends BaseGenericCatalog {
    @Field('C1', 8701) nombre: string;
    @Field('C2', 8702) usoStatus: number;
    @Field('C3', 8703) orden: number;
    @Field('C4', 8704) activo: boolean;

    private _grupoStatus: GrupoStatus;
    get grupoStatus(): GrupoStatus { return this._grupoStatus; }
    set grupoStatus(value) {
        this._grupoStatus = value;
        this.usoStatus = this._grupoStatus.key;
    }
}

export class Empresa extends BaseGenericCatalog {
    @Field('C1', 201) nombre: string;

    constructor() {
        super();
        this.keysChanges = ['nombre'];
    }
}

export class Persona extends BaseGenericCatalog {
    @Field('C1', 101) nombre: string;
    @Field('C2', 102) apellidoPaterno: string;
    @Field('C3', 103) apellidoMaterno: string;
    @Field('C4', 104) fechaNacimiento: Date;
    @Field('C5', 105) sexo: number;

    public get nombreCompleto(): string {
        return `${this.nombre} ${this.apellidoPaterno ? this.apellidoPaterno : ''} ${this.apellidoMaterno ? this.apellidoMaterno : ''}`;
    }

    public get edad(): number{
        const diff = Date.now().valueOf() - this.fechaNacimiento.valueOf();
        const ageDate = new Date(diff);
        // 1970 is start year on JSms
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    constructor() {
        super();
        this.keysChanges = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'fechaNacimiento', 'sexo'];
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
    }
}
