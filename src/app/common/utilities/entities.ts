export interface BaseEntitie<T> {
    [key: string]: T;
}

export function data2Entities<T>(list: T[], prop: string, state: BaseEntitie<T> = {}) {
    return list.reduce(
        (entities: { [key: string]: T }, item: T) => {
            return { ...entities, [item[prop]]: item };
        }, { ...state });
}

export function entitie2List<T>(state: BaseEntitie<T>): T[] {
    return Object.keys(state).map(id => state[parseInt(id, 10)]);
}
