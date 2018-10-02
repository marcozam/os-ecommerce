import { NOTIFICATION_TYPES, NOTIFICATION_CODE } from 'app/notifications';

export interface MessageAction {
    messageCode: NOTIFICATION_CODE;
    messageSection: string;
}

export interface DialogMessage {
    title: string;
    message: string;
    type: NOTIFICATION_TYPES;
}
