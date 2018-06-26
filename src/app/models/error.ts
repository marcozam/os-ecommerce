import { MessageTypes } from 'app/constants';

export interface GeneralError {
    type: MessageTypes;
    message: string;
    title: string;
}
