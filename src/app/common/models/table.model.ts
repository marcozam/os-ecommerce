import { TemplateRef } from "@angular/core";

// TODO: Change for enum
export type SortDirection = 'asc' | 'desc' | 'none';
export type ColumnAlign = 'start' | 'center' | 'end';

export type OSColumnDescriptionFuntion<T> = (item: T) => string;

export interface OSColumnConfiguration {
  sortable?: boolean;
  filtrable?: boolean;
  autoSum?: boolean;
  className?: string;
  align: ColumnAlign;
}

export const OS_COLUMN_DEFAULT_CONFIGURATION: OSColumnConfiguration = {
  align: 'start',
  sortable: false,
  filtrable: false,
  autoSum: false,
};

export class OSTableColumn {
  template?: TemplateRef<any>;
  constructor(
    public uniqueID: string,
    public header: string,
    public description: OSColumnDescriptionFuntion<any>,
    public configuration: OSColumnConfiguration = OS_COLUMN_DEFAULT_CONFIGURATION,
    _template?: TemplateRef<any>) {
    this.configuration = { ...OS_COLUMN_DEFAULT_CONFIGURATION, ...configuration };
    this.template = _template;
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
