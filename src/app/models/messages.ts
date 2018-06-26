import { MessageCode } from 'app/constants';

export interface MessageAction {
    messageCode: MessageCode;
    messageSection: string;
}
