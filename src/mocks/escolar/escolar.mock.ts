import { Colegio, Plantel, NivelEscolar, GradoEscolar } from 'models/escolar';

export const listaColegiosMock: Colegio[] = [
  new Colegio(1, 'Colegio Santa Cruz'),
];

export const listaPlantelesMock: Plantel[] = [
  new Plantel(1, 'Kinder'),
  new Plantel(2, 'Primaria'),
  new Plantel(3, 'Secundaria'),
];

export const listaNivelesEscolaresMock: NivelEscolar[] = [
  new NivelEscolar(1, 'Maternal'),
  new NivelEscolar(2, 'Kinder'),
  new NivelEscolar(3, 'Primaria Baja'),
  new NivelEscolar(4, 'Primaria Alta'),
  new NivelEscolar(5, 'Secundaria'),
];

export const listaGradosEscolaresMock: GradoEscolar[] = [
  new GradoEscolar(1, 'A', listaNivelesEscolaresMock[0]),
  new GradoEscolar(2, 'B', listaNivelesEscolaresMock[0]),
  new GradoEscolar(3, 'C', listaNivelesEscolaresMock[0]),
  new GradoEscolar(4, '1ro', listaNivelesEscolaresMock[1]),
  new GradoEscolar(5, '2do', listaNivelesEscolaresMock[1]),
  new GradoEscolar(6, '3ro', listaNivelesEscolaresMock[1]),
  new GradoEscolar(7, '1ro', listaNivelesEscolaresMock[2]),
  new GradoEscolar(8, '2do', listaNivelesEscolaresMock[2]),
  new GradoEscolar(9, '3ro', listaNivelesEscolaresMock[2]),
  new GradoEscolar(10, '4to', listaNivelesEscolaresMock[3]),
  new GradoEscolar(11, '5to', listaNivelesEscolaresMock[3]),
  new GradoEscolar(12, '6to', listaNivelesEscolaresMock[3]),
  new GradoEscolar(13, '1ro', listaNivelesEscolaresMock[4]),
  new GradoEscolar(14, '2do', listaNivelesEscolaresMock[4]),
  new GradoEscolar(15, '3ro', listaNivelesEscolaresMock[4]),
];

export const listaGruposEscolaresMock: any[] = [

];
