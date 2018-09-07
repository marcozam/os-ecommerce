import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// CONSTANTS
import { NOTIFICATION_TYPES } from 'app/notifications';
// Models
import { OpenDialogEvent } from 'app/models/events';

@Component({
  selector: 'os-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogBoxComponent {
  dialogType: NOTIFICATION_TYPES;
  lines: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OpenDialogEvent) {
    this.dialogType = data.type;
    this.lines = this.data.mensaje.split('.');
  }

  onNoClick(): void { this.dialogRef.close(); }
}
