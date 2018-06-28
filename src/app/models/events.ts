import { MessageTypes } from '../constants';

export interface FormSaveEvent<T> {
    new: T;
    old: T;
}

export interface OpenDialogEvent {
    title: string;
    mensaje: string;
    type: MessageTypes;
    showButtons: boolean;
}
