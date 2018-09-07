import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
// RxJs
import { tap } from 'rxjs/operators';
// Actions
import * as marcasActions from '../actions/marcas.action';
import * as categoriasActions from '../actions/categorias.action';
// Services
import { DialogBoxService } from 'app/services/dialog-box.service';
// Notifications
import {
    NOTIFICATION_CODE,
    NOTIFICATION_TYPES,
    ERROR_MESSAGE,
    ERROR_TITLE,
    PRODUCTOS_NOTIFICATION_SECTIONS,
    PRODUCTOS_NOTIFICATIONS
} from 'app/notifications';
// Models
import { MessageAction, DialogMessage } from 'app/models';

@Injectable()
export class DialogsHandlerEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private service: DialogBoxService,
    ) { }

    @Effect({ dispatch: false })
    LoadCategoriaByIDFail$ = this.actions$.ofType(
        // CATEGORIAS
        categoriasActions.CategoriasActionTypes.LOAD_CATEGORIAS_FAIL,
        categoriasActions.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_FAIL,
        categoriasActions.CategoriasActionTypes.SAVE_CATEGORIA_FAIL,
        categoriasActions.CategoriasActionTypes.SAVE_CATEGORIA_SUCCESS,
        // MARCAS
        marcasActions.MarcasActionTypes.LOAD_MARCAS_FAIL,
        marcasActions.MarcasActionTypes.LOAD_MARCA_BY_ID_FAIL
    )
        .pipe(
            tap((action: MessageAction) => {
                let title = ERROR_TITLE;
                let message = ERROR_MESSAGE;
                let messageType = NOTIFICATION_TYPES.ERROR;
                let callback: Function = null;
                if (action.messageCode !== NOTIFICATION_CODE.GENERAL_ERROR) {
                    switch (action.messageCode) {
                        case NOTIFICATION_CODE.ITEM_SAVED:
                        case NOTIFICATION_CODE.ITEM_NOT_FOUND: {
                            switch (action.messageSection) {
                                case PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS: {
                                    callback = () => this.router.navigate(['/secure/productos/categorias']);
                                    break;
                                }
                            }
                            break;
                        }
                    }

                    const messageLabel: DialogMessage = PRODUCTOS_NOTIFICATIONS[action.messageSection][action.messageCode];
                    title = messageLabel.title;
                    message = messageLabel.message;
                    messageType = messageLabel.type;
                }
                this.service.openDialog(title, message, {
                    type: messageType,
                    onClose: callback
                });
            })
        );
}
