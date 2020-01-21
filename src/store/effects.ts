import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
// RxJs
import { tap } from 'rxjs/operators';
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

  /*
  @Effect({ dispatch: false })
  notifications$ = this.actions$.pipe(
      ofType([ ]),
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
  */
}
