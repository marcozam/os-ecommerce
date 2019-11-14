export enum PERIODO_TIEMPO_KEY {
    Diario = 0, // TODO: Add Id
    Semanal = 1,
    Decenal = 2,
    Quincenal = 3,
    Mensual = 4,
}

export const PERIODOS_TIEMPO = [
    { key: PERIODO_TIEMPO_KEY.Diario, nombre: 'Diario' },
    { key: PERIODO_TIEMPO_KEY.Semanal, nombre: 'Semanal' },
    { key: PERIODO_TIEMPO_KEY.Decenal, nombre: 'Decenal' },
    { key: PERIODO_TIEMPO_KEY.Quincenal, nombre: 'Quincenal' },
    { key: PERIODO_TIEMPO_KEY.Mensual, nombre: 'Mensual' }
];
