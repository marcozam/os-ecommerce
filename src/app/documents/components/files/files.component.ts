import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Dialogs
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { APIService } from 'app/API.service';

@Component({
  templateUrl: './files.component.html',
  // styleUrls: ['./auth-layout.component.scss']
})
export class FilesComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: APIService) { }

  ngOnInit() {
    this.apiService.ListFiless().then(({ items }) => console.log(items));
  }

  openDialog(type: string) {
    this.dialog.open(FileDialogComponent);
  }

}
