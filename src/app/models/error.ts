import { DialogTypes } from 'app/constants';

export interface GeneralError {
    type: DialogTypes;
    message: string;
    title: string;
    isHandled: boolean;
}
