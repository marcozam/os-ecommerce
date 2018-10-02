import { OSPeriodo, OSMes } from '../models';

export const periodos: OSPeriodo[] = [
    new OSPeriodo(1, 'Hoy'),
    new OSPeriodo(2, 'Ayer'),
    new OSPeriodo(3, 'Ultimos 2 Dias'),
    new OSPeriodo(4, 'Esta Semana'),
    new OSPeriodo(5, 'La semana pasada'),
    new OSPeriodo(6, 'Ultimas 2 Semanas'),
    new OSPeriodo(7, 'Mes en especifico'),
];

export const months: OSMes[] = [
    { key: 1, nombre: 'Enero' },
    { key: 2, nombre: 'Febrero' },
    { key: 3, nombre: 'Marzo' },
    { key: 4, nombre: 'Abril' },
    { key: 5, nombre: 'Mayo' },
    { key: 6, nombre: 'Junio' },
    { key: 7, nombre: 'Julio' },
    { key: 8, nombre: 'Agosto' },
    { key: 9, nombre: 'Septiembre' },
    { key: 10, nombre: 'Octubre' },
    { key: 11, nombre: 'Noviembre' },
    { key: 12, nombre: 'Diciembre' }
  ];
