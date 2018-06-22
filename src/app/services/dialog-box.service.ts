import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
// Component
import { DialogBoxComponent } from 'app/components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {
  isOpen = false;
  constructor(public dialog: MatDialog) { }

  openDialog(_title: string, _mensaje: string, _showButtons: boolean = false, _onClose?: Function) {
    this.isOpen = true;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { title: _title, mensaje: _mensaje, showButtons: _showButtons }
    });
    dialogRef.afterClosed().subscribe(() => { this.isOpen = false; });
    if (_onClose) { dialogRef.afterClosed().subscribe(result => { _onClose(result); }); }
  }
}
