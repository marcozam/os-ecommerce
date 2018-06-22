export * from './dialog-box.state';

import { DialogBoxState } from './dialog-box.state';

export interface StandAloneRootState {
    dialog: DialogBoxState;
}
