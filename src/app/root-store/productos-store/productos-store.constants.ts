import { MessageCode, MessageTypes, WARNING_TITLE, SUCCESS_TITLE } from 'app/constants';

export enum ProductosMessageSection {
    CATEGORIAS = 'categorias',
    PRODUCTOS = 'productos',
    MARCAS = 'marcas'
}

export const productosMessages = {
    [ProductosMessageSection.CATEGORIAS]: {
        [MessageCode.ITEM_NOT_FOUND]: {
            title: WARNING_TITLE,
            message: 'La categoria seleccionada no se pudo encontrar',
            type: MessageTypes.WARNING,
        },
        [MessageCode.NO_DATA]: {
            title: WARNING_TITLE,
            message: '',
            type: MessageTypes.WARNING,
        },
        [MessageCode.ITEM_SAVED]: {
            title: SUCCESS_TITLE,
            message: 'La categoria se ha guardado exitosamente',
            type: MessageTypes.SUCCESS,
        },
    },
    [ProductosMessageSection.MARCAS]: {
        [MessageCode.ITEM_NOT_FOUND]: {
            title: WARNING_TITLE,
            message: 'La marca seleccionada no se pudo encontrar',
            type: MessageTypes.WARNING,
        },
        [MessageCode.NO_DATA]: {
            title: WARNING_TITLE,
            message: '',
            type: MessageTypes.WARNING,
        },
        [MessageCode.ITEM_SAVED]: {
            title: SUCCESS_TITLE,
            message: 'La marca se ha guardado exitosamente',
            type: MessageTypes.SUCCESS,
        },
    }
};
