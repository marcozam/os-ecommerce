import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// CONSTANTS
import { DialogTypes } from 'app/constants';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  dialogType: DialogTypes;
  lines: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dialogType = DialogTypes.WARNING;
    }

  ngOnInit() { this.lines = this.data.mensaje.split('.'); }

  onNoClick(): void { this.dialogRef.close(); }
}
