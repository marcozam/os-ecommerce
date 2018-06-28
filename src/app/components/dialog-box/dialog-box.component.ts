import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// CONSTANTS
import { MessageTypes } from 'app/constants';

@Component({
  selector: 'os-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  dialogType: MessageTypes;
  lines: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dialogType = MessageTypes.WARNING;
    }

  ngOnInit() { this.lines = this.data.mensaje.split('.'); }

  onNoClick(): void { this.dialogRef.close(); }
}
