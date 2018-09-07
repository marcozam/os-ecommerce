import { NOTIFICATION_CODE } from '../../enums';
import { INotification } from '../../models';
import { NotificatioGenerator } from '../../notification-generator';

const PRODUCTO_NAME = 'el producto';

export const PRODUCTOS_PRODUCTOS_NOTIFICATIONS: {[key: number]: INotification} = {
    [NOTIFICATION_CODE.ITEM_NOT_FOUND]: NotificatioGenerator.ItemNotFound(PRODUCTO_NAME),
    [NOTIFICATION_CODE.NO_DATA]: NotificatioGenerator.NoData('los productos'),
    [NOTIFICATION_CODE.ITEM_SAVED]: NotificatioGenerator.ItemSaved(PRODUCTO_NAME)
};
