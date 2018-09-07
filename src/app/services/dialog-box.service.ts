import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
// Notifications
import { NOTIFICATION_TYPES } from 'app/notifications';
// Component
import { DialogBoxComponent } from 'app/components/dialog-box/dialog-box.component';
import { OpenDialogEvent } from 'app/models/events';

export interface DialogBoxOptions {
  type?: NOTIFICATION_TYPES;
  showButtons?: boolean;
  onClose?: Function;
}

const DEFAULT_DIALOG_BOX_OPTIONS: DialogBoxOptions = {
  type: NOTIFICATION_TYPES.INFO,
  showButtons: false
};

@Injectable({ providedIn: 'root' })
export class DialogBoxService {
  isOpen = false;
  constructor(public dialog: MatDialog) { }

  openDialog(
    title: string,
    mensaje: string,
    options?: DialogBoxOptions
  ) {
    options = options ? { ...DEFAULT_DIALOG_BOX_OPTIONS, ...options } : DEFAULT_DIALOG_BOX_OPTIONS;
    this.isOpen = true;
    const data: OpenDialogEvent = {
      title,
      mensaje,
      type: options.type,
      showButtons: options.showButtons
    };

    const dialogRef = this.dialog.open(DialogBoxComponent, { data });
    dialogRef.afterClosed().subscribe(() => { this.isOpen = false; });
    if (options.onClose) { dialogRef.afterClosed().subscribe(result => { options.onClose(result); }); }
  }
}
