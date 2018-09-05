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
// Constants
import { MessageCode, ERROR_TITLE, ERROR_MESSAGE, WARNING_TITLE, MessageTypes } from 'app/constants';
import { productosMessages, ProductosMessageSection } from '../productos-store.constants';
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
        marcasActions.MarcasActionTypes.LOAD_MARCA_BY_ID_FAIL,
        marcasActions.MarcasActionTypes.SAVE_MARCA_FAIL,
        marcasActions.MarcasActionTypes.SAVE_MARCA_SUCCESS,
    )
        .pipe(
            tap((action: MessageAction) => {
                let title = ERROR_TITLE;
                let message = ERROR_MESSAGE;
                let messageType = MessageTypes.ERROR;
                let callback: Function = null;
                if (action.messageCode !== MessageCode.GENERAL_ERROR) {
                    switch (action.messageCode) {
                        case MessageCode.ITEM_SAVED:
                        case MessageCode.ITEM_NOT_FOUND: {
                            switch (action.messageSection) {
                                case ProductosMessageSection.CATEGORIAS: {
                                    callback = () => this.router.navigate(['/secure/productos/categorias']);
                                    break;
                                }
                                case ProductosMessageSection.MARCAS: {
                                    callback = () => this.router.navigate(['/secure/productos/marcas']);
                                    break;
                                }
                            }
                            break;
                        }
                    }

                    const messageLabel: DialogMessage = productosMessages[action.messageSection][action.messageCode];
                    title = messageLabel.title;
                    message = messageLabel.message;
                    messageType = messageLabel.type;
                }
                this.service.openDialog(title, message);
                // , messageType, false, callback
            })
        );
}
