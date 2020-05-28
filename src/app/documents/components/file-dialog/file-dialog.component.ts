import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-file-dialog',
  templateUrl: './file-dialog.component.html',
  // styleUrls: ['./auth-layout.component.scss']
})
export class FileDialogComponent implements OnInit {

  tokens = ['Culiacan', 'Marketing', 'Lista de Precios'];
  fileTokens = ['Culiacan'];

  constructor() { }

  ngOnInit() { }

}
