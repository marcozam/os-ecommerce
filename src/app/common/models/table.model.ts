// TODO: Change for enum
export type SortDirection = 'asc' | 'desc' | 'none';
export type ColumnAlign = 'left' | 'center' | 'right';

export type OSColumnDescriptionFuntion<T> = (item: T) => string;

export class OSTableColumn {
    align: ColumnAlign = 'left';
    constructor(
        public uniqueID: string,
        public header: string,
        public description: OSColumnDescriptionFuntion<any>
    ) { }
}

export class OSActions {
    constructor(
        public uniqueID: string,
        public text: string,
        public color: string,
        public inHeader: boolean = false,
        public icon?: string
    ) { }
}
