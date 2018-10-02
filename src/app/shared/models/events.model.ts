import { NOTIFICATION_TYPES } from 'application/notifications';

export interface FormSaveEvent<T> {
    new: T;
    old: T;
}

export interface OpenDialogEvent {
    title: string;
    mensaje: string;
    type: NOTIFICATION_TYPES;
    showButtons: boolean;
}
