import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// Models
import { INotification } from '../models';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notificationAutoDismissDuration = 5000;
    constructor(private snackBar: MatSnackBar) { }
    sendNotification(notification: INotification) {
        const template = notification.message;
        this.snackBar.open(template, 'enterado', {
            duration: this.notificationAutoDismissDuration,
            panelClass: [notification.type]
        });
    }
}
