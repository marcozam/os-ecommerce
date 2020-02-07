import { Injectable } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Services
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';
// Models
import { Persona } from 'models/general';
import { Contacto, DatoContacto, TipoDatoContacto } from 'models/crm';

@Injectable()
export class ContactoService extends BaseGenericCatalogService<Contacto> {

  constructor(_db: GenericCatalogService) {
    super(_db, 403);
  }

  newInstance() { return new Contacto(); }

  mapDatos2Server(list: DatoContacto[]) {
    return list.map(dc => {
      return `${dc.tipoDatoContactoID},${dc.valor},${dc.nombre}`;
    });
  }

  mapDatosData(object): DatoContacto {
      const item = new DatoContacto();
      item.key = object.C0;
      item.valor = object.C1;
      item.tipoDatoContactoID = object.C2;
      item.nombre = object.C3;
      return item;
  }

  getPersonaByName(apellido: string, nombre: string): Observable<Contacto[]> {
    const params = this.db.createParameter('CRM0001', 4, { V3: apellido.trim(), V4: nombre.trim(), V5: '' });
    return this.db.getData(params).pipe(
      map(result => result.Table.map(({ C0, C1, C2, C3, C4 }) => {
        const contacto = new Contacto();
        contacto.key = C0;
        contacto.tipoID = TipoDatoContacto.Persona;
        contacto.referenceID = C1;
        contacto.persona = new Persona(C2, C3, C4, C1);
        return contacto;
      })));
  }

  getByID(ID: number): Observable<Contacto> {
    const params = this.db.createParameter('CRM0001', 2, { V3: 0, V4: ID});
    return this.db.getData(params).pipe(
      map(({ Table, Table1 }) => {
        console.log('getById', Table, Table1);
        const item = Table[0];
        if (item) {
          const contacto = this.mapData(item);
          console.log('getById mapper', item);
          contacto.datos = Table1.map(t => this.mapDatosData(t));
          return contacto;
        }
        return null; // TODO Throw an exception
      })
    );
  }

  getDatosContactoByID(ID: number): Observable<DatoContacto[]> {
    const params = this.db.createParameter('CRM0001', 2, { V3: 0, V4: ID});
    return this.db.getData(params).pipe(
      map(({ Table, Table1 }) => Table && Table[0] ?
          Table1.map(t => this.mapDatosData(t)) :
          null // TODO Throw an exception
      ));
  }

  save(item: Contacto): Observable<Contacto> {
    let DCA = [];
    DCA.push('C0,C1,C2');
    DCA = DCA.concat(this.mapDatos2Server(item.datos));

    const tParams = this.db.createParameter('CRM0001', 1, {
      V3: item.tipoID,
      V4: item.tipoID === 1 ? item.persona.key : item.empresa.key,
      V7: DCA.join('&')
    });

    return this.db.getData(tParams).pipe(
      map((result: any) => {
        const newItem = this.mapData(result.Table[0]);
        item.key = newItem.key;
        return item;
      })
    );
  }
}
