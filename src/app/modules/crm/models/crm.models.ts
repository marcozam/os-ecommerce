import {
    BaseGenericCatalog,
    Persona,
    Empresa
} from 'app/modules/base/models/base.models';
import { Field } from 'app/modules/generic-catalogs/decorator/dynamic-catalog.decorator';

export class Contacto extends BaseGenericCatalog {
    @Field('C1', 50301)  tipoID: number;
    @Field('C2', 50302)  referenceID: number;

    persona?: Persona;
    empresa?: Empresa;

    datos: DatoContacto[];

    public get nombre(): string {
        return this.persona ? this.persona.nombreCompleto.toUpperCase() : this.empresa.nombre.toUpperCase();
    }

    constructor() {
        super();
        this.persona = new Persona();
        this.datos = [];
    }
}

export class DatoContacto extends BaseGenericCatalog {
    @Field('C1', 50201) nombre: string;
    @Field('C2', 50202) contactoID: number;
    @Field('C3', 50203) tipoDatoContactoID: number;
    @Field('C4', 50204) valor: string;

    private _tipoDatoContacto: TipoDatosContacto;
    get tipoDatoContacto(): TipoDatosContacto { return this._tipoDatoContacto; }
    set tipoDatoContacto(value) {
        this._tipoDatoContacto = value;
        this.tipoDatoContactoID = this.tipoDatoContacto.key;
    }

    constructor() { super(); }
}

export class TipoDatosContacto extends BaseGenericCatalog {
    @Field('C1', 50101) nombre: string;
    @Field('C2', 50102) validacion: string;
    @Field('C3', 50104) placeholder: string;
    @Field('C4', 50103) maxLength: number;
    @Field('C5', 50105) catalogoID: number;
    @Field('C6', 50106) visible: boolean;
    @Field('C7', 50107) icon: string;

    constructor() { super(); }
}
