import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
// RxJs
import { tap } from 'rxjs/operators';
// Product Actions
import {
    PRODUCTOS_NOTIFICATION_ACTIONS,
    MARCAS_NOTIFICATION_ACTIONS,
    CATEGORIAS_NOTIFICATION_ACTIONS
} from './productos-store/actions';
// Notifications
import {
    NotificationService,
    INotification,
    NOTIFICATION_CODE,
    NOTIFICATION_TYPES,
    ERROR_MESSAGE,
    ERROR_TITLE,
    PRODUCTOS_NOTIFICATIONS,
} from 'app/notifications';
// Models
// import { MessageAction } from 'app/common';

@Injectable()
export class GlobalEffects {
    constructor(
        private actions$: Actions,
        private notificationService: NotificationService
    ) { }

    @Effect({ dispatch: false })
    notifications$ = this.actions$.pipe(
        ofType(
            ...PRODUCTOS_NOTIFICATION_ACTIONS,
            ...MARCAS_NOTIFICATION_ACTIONS,
            ...CATEGORIAS_NOTIFICATION_ACTIONS
        ),
        tap(action => {
            let notification: INotification = {
                title: ERROR_TITLE,
                message: ERROR_MESSAGE,
                type: NOTIFICATION_TYPES.ERROR
            };
            if (action['messageCode'] !== NOTIFICATION_CODE.GENERAL_ERROR) {
                notification = PRODUCTOS_NOTIFICATIONS[action['messageSection']][action['messageCode']];
            }
            // this.notificationService.sendNotification(notification);
        })
    );
}
