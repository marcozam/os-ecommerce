import { NOTIFICATION_CODE } from '../../enums';
import { INotification } from '../../models';
import { NotificatioGenerator } from '../../notification-generator';

const CATEGORIA_NAME = 'la categoria';

export const PRODUCTOS_CATEGORIAS_NOTIFICATIONS: {[key: number]: INotification} = {
    [NOTIFICATION_CODE.ITEM_NOT_FOUND]: NotificatioGenerator.ItemNotFound(CATEGORIA_NAME),
    [NOTIFICATION_CODE.NO_DATA]: NotificatioGenerator.NoData('las categorias'),
    [NOTIFICATION_CODE.ITEM_SAVED]: NotificatioGenerator.ItemSaved(CATEGORIA_NAME)
};
