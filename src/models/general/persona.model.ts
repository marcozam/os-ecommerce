import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class Persona extends BaseCatalog {
    @Field('C1', 101) nombre: string;
    @Field('C2', 102) apellidoPaterno: string;
    @Field('C3', 103) apellidoMaterno: string;
    @Field('C4', 104) fechaNacimiento?: Date;
    @Field('C5', 105) sexo?: number;

    public get nombreCompleto(): string {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
    }

    public get edad(): number {
        const diff = Date.now().valueOf() - this.fechaNacimiento.valueOf();
        const ageDate = new Date(diff);
        // 1970 is start year on JSms
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    constructor(nombre: string = '', apellidoPaterno: string = '', apellidoMaterno: string = '', key = 0) {
        super(key);
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
}
