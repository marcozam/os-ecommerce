import { WARNING_TITLE, SUCCESS_TITLE, ERROR_TITLE } from './constants';
import { NOTIFICATION_TYPES } from './enums';
import { INotification } from './models';

export class NotificatioGenerator {
    // TODO
    /*
    private static ArticleGenerator(name: string) { }
    private static Sentence(sentence: string) { }
    */

    static ItemNotFound(name: string): INotification {
        return {
            title: WARNING_TITLE,
            message: `No ha sido posible encontrar ${name} seleccionada.`,
            type: NOTIFICATION_TYPES.WARNING,
        };
    }

    static NoData(name: string): INotification {
        return {
            title: WARNING_TITLE,
            message: `No se encontro ningun registro de ${name}.`,
            type: NOTIFICATION_TYPES.WARNING,
        };
    }

    static ItemSaved(name: string): INotification {
        return {
            title: SUCCESS_TITLE,
            message: `${name} se ha guardado.`,
            type: NOTIFICATION_TYPES.SUCCESS,
        };
    }

    static ItemNotSaved(name: string): INotification {
        return {
            title: ERROR_TITLE,
            message: `${name} no pudo ser guardado.`,
            type: NOTIFICATION_TYPES.ERROR,
        };
    }
}
