import * as fromState from './state';
import { ProductsModuleState } from './productos-store/state';

export interface RootState {
    products: ProductsModuleState;
    dialog: fromState.DialogBoxState;
}
