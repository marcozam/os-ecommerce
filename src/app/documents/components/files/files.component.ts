import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Dialogs
import { FileDialogComponent } from '../file-dialog/file-dialog.component';

@Component({
  templateUrl: './files.component.html',
  // styleUrls: ['./auth-layout.component.scss']
})
export class FilesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(type: string) {
    this.dialog.open(FileDialogComponent);
  }

}
