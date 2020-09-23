import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CicloEscolar, Plantel, SeccionEscolar, GradoEscolar } from '../models';

@Injectable()
export class CatalogosEscolaresService {
  ciclos(instituto: string): Observable<CicloEscolar[]> {
    return of([
      {
        uuid: '1',
        nombre: '2019 - 2020'
      },
      {
        uuid: '2',
        nombre: '2020 - 2021'
      },
      {
        uuid: '3',
        nombre: '2021 - 2022'
      },
    ]);
  }

  planteles(instituto: string): Observable<Plantel[]> {
    return of([
      {
        uuid: '1',
        nombre: 'Zapopan'
      },
      {
        uuid: '2',
        nombre: 'Guadalajara'
      },
      {
        uuid: '3',
        nombre: 'Tlajomulco'
      },
    ]);
  }

  secciones(instituto: string, plantel: string): Observable<SeccionEscolar[]> {
    return of([
      {
        uuid: '1',
        nombre: 'Kinder'
      },
      {
        uuid: '2',
        nombre: 'Primaria'
      },
      {
        uuid: '3',
        nombre: 'Secundaria'
      },
    ]);
  }

  grados(instituto: string, plantel: string, seccion: string): Observable<GradoEscolar[]> {
    return of([
      {
        uuid: '1',
        nombre: '1ro'
      },
      {
        uuid: '2',
        nombre: '2do'
      },
      {
        uuid: '3',
        nombre: '3ro'
      },
      {
        uuid: '4',
        nombre: '4to'
      },
      {
        uuid: '6',
        nombre: '5to'
      },
      {
        uuid: '6',
        nombre: '6to'
      },
    ]);
  }
}
