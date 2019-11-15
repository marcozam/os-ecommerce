import * as fromState from './state';
import { ProductsModuleState } from './productos/constants';

export interface RootState {
    products: ProductsModuleState;
    dialog: fromState.DialogBoxState;
}
