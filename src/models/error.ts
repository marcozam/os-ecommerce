import { NOTIFICATION_TYPES } from 'app/notifications';

export interface GeneralError {
    type: NOTIFICATION_TYPES;
    message: string;
    title: string;
}
