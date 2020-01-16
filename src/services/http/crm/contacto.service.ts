import { Injectable } from '@angular/core';
// RxJs
import { of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
// Services
import { PersonasService } from '../base';
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';
// Models
import { Persona } from 'models/general';
import { Contacto, DatoContacto } from 'models/crm';

@Injectable()
export class ContactoService extends BaseGenericCatalogService<Contacto> {

  constructor(_db: GenericCatalogService, private personaService: PersonasService) {
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
      map(result => result.Table.map(item => {
        const cnt = new Contacto();
        cnt.key = item.C0;
        cnt.tipoID = 1;
        cnt.persona = new Persona();
        cnt.persona.key = item.C1;
        cnt.persona.nombre = item.C2;
        cnt.persona.apellidoPaterno = item.C3;
        cnt.persona.apellidoMaterno = item.C4;
        return cnt;
      })));
  }

  getByID(ID: number) {
    const params = this.db.createParameter('CRM0001', 2, { V3: 0, V4: ID});
    return this.db.getData(params).pipe(
      switchMap(result => {
        let contacto = <Contacto>result.Table[0];
        if (contacto) {
          contacto = this.mapData(contacto);
          contacto.datos = result.Table1.map(t => this.mapDatosData(t));
          if (contacto.tipoID === 1) {
              return this.personaService.getByID(contacto.referenceID).pipe(
                map((persona: Persona) => {
                  contacto.persona = persona;
                  return contacto;
                })
              );
          }
          return of(contacto);
        }
        return of(null); // TODO Throw an exception
      })
    );
  }

  save(item: Contacto) {
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
