// TODO: Change for enum
export type SortDirection = 'asc' | 'desc' | 'none';
export type ColumnAlign = 'start' | 'center' | 'end';

export type OSColumnDescriptionFuntion<T> = (item: T) => string;

export interface OSColumnConfiguration {
  sortable?: boolean;
  filtrable?: boolean;
  autoSum?: boolean;
  align: ColumnAlign;
}

export const OS_COLUMN_DEFAULT_CONFIGURATION: OSColumnConfiguration = {
  align: 'start',
  sortable: false,
  filtrable: false,
  autoSum: false,
}

export class OSTableColumn {
  constructor(
    public uniqueID: string,
    public header: string,
    public description: OSColumnDescriptionFuntion<any>,
    public configuration: OSColumnConfiguration = OS_COLUMN_DEFAULT_CONFIGURATION) {
    this.configuration = { ...OS_COLUMN_DEFAULT_CONFIGURATION, ...configuration };
  }
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
