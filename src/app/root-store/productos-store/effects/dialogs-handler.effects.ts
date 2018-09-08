import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJs
import { tap } from 'rxjs/operators';
// Actions
import {
    PRODUCTOS_NOTIFICATION_ACTIONS,
    MARCAS_NOTIFICATION_ACTIONS
} from '../actions';
import * as categoriasActions from '../actions/categorias.action';
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
import { MessageAction } from 'app/models';

@Injectable()
export class DialogsHandlerEffects {
    constructor(
        private actions$: Actions,
        private notificationService: NotificationService
        // private service: DialogBoxService,
    ) { }

    @Effect({ dispatch: false })
    notifications$ = this.actions$.ofType(
        ...PRODUCTOS_NOTIFICATION_ACTIONS,
        ...MARCAS_NOTIFICATION_ACTIONS,
        //#region CATEGORIAS
        // Fail
        categoriasActions.CategoriasActionTypes.LOAD_CATEGORIAS_FAIL,
        categoriasActions.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_FAIL,
        categoriasActions.CategoriasActionTypes.SAVE_CATEGORIA_FAIL,
        // Success
        categoriasActions.CategoriasActionTypes.SAVE_CATEGORIA_SUCCESS,
        //#endregion
    ).pipe(
        tap((action: MessageAction) => {
            let notification: INotification = {
                title: ERROR_TITLE,
                message: ERROR_MESSAGE,
                type: NOTIFICATION_TYPES.ERROR
            };
            if (action.messageCode !== NOTIFICATION_CODE.GENERAL_ERROR) {
                notification = PRODUCTOS_NOTIFICATIONS[action.messageSection][action.messageCode];
            }
            this.notificationService.sendNotification(notification);
        })
    );
}
