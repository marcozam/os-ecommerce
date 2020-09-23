import { Component, OnInit } from '@angular/core';

import { APIService } from 'app/API.service';

@Component({
  selector: 'os-file-dialog',
  templateUrl: './file-dialog.component.html',
  // styleUrls: ['./auth-layout.component.scss']
})
export class FileDialogComponent implements OnInit {

  tokens = ['Culiacan', 'Marketing', 'Lista de Precios'];
  fileTokens = [];

  constructor(private apiService: APIService) { }

  ngOnInit() { }

  onSave() {
    console.log('Save');
    this.apiService.CreateFiles({
      name: 'Name Test',
      description: 'Test Description',
    });
  }

}
