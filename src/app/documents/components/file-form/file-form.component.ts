import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-file-form',
  templateUrl: './file-form.component.html',
  // styleUrls: ['./auth-layout.component.scss']
})
export class FileFormComponent {

  @Input() value: {
    name: string;
    description: string;
    file?: any;
  } = {
    name: '',
    description: '',
  };

  @Input() withFile = true;

}
