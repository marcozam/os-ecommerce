import * as fromState from './state';
import { ProductsModuleState } from './productos/state';

export interface RootState {
    products: ProductsModuleState;
    dialog: fromState.DialogBoxState;
}
