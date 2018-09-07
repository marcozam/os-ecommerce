import { NOTIFICATION_TYPES } from '../enums';

export interface INotification {
    title: string;
    message: string;
    type: NOTIFICATION_TYPES;
}
