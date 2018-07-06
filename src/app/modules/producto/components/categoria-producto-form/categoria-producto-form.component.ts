import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categoria-producto-form',
  templateUrl: './categoria-producto-form.component.html',
  styleUrls: ['./categoria-producto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaProductoFormComponent {
  @Input() parent: FormGroup;

  get catalogoID() {
    return this.parent.value.catalogoID;
  }

  constructor() { }
}
