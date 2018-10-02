import { NOTIFICATION_TYPES } from 'application/notifications';

export interface GeneralError {
    type: NOTIFICATION_TYPES;
    message: string;
    title: string;
}
