import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
// Constants
import { MessageTypes } from 'app/constants';
// Component
import { DialogBoxComponent } from 'app/components/dialog-box/dialog-box.component';
import { OpenDialogEvent } from 'app/models/events';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {
  isOpen = false;
  constructor(public dialog: MatDialog) { }

  openDialog(
    title: string,
    mensaje: string,
    type: MessageTypes = MessageTypes.INFO,
    showButtons: boolean = false,
    _onClose?: Function
  ) {
    this.isOpen = true;
    const data: OpenDialogEvent = { title, mensaje, type, showButtons };
    const dialogRef = this.dialog.open(DialogBoxComponent, { data });
    dialogRef.afterClosed().subscribe(() => { this.isOpen = false; });
    if (_onClose) { dialogRef.afterClosed().subscribe(result => { _onClose(result); }); }
  }
}
