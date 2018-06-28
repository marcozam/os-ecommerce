import { MessageCode, MessageTypes } from 'app/constants';

export interface MessageAction {
    messageCode: MessageCode;
    messageSection: string;
}

export interface DialogMessage {
    title: string;
    message: string;
    type: MessageTypes;
}
