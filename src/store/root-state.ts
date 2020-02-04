import * as fromState from './state';
import { ProductsModuleState } from './productos';
import { BaseCatalogsModuleState } from './base-catalogs';
import { CRMModuleState } from './crm';

export interface RootState {
  products: ProductsModuleState;
  dialog: fromState.DialogBoxState;
  baseCatalog: BaseCatalogsModuleState;
  CRM: CRMModuleState;
}
