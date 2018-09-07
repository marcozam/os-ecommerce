import { NOTIFICATION_CODE } from '../../enums';
import { INotification } from '../../models';
import { NotificatioGenerator } from '../../notification-generator';

const MARCA_NAME = 'la marca';

export const PRODUCTOS_MARCAS_NOTIFICATIONS: {[key: number]: INotification} = {
    [NOTIFICATION_CODE.ITEM_NOT_FOUND]: NotificatioGenerator.ItemNotFound(MARCA_NAME),
    [NOTIFICATION_CODE.NO_DATA]: NotificatioGenerator.NoData('las marcas'),
    [NOTIFICATION_CODE.ITEM_SAVED]: NotificatioGenerator.ItemSaved(MARCA_NAME)
};
