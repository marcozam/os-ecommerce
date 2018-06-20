import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-marca-producto-form',
  templateUrl: './marca-producto-form.component.html',
  styleUrls: ['./marca-producto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoFormComponent {

  @Input() parent: FormGroup;

  constructor() { }

  get invalid(): boolean {
    return (
      this.parent.get('nombre').hasError('required') &&
      this.parent.get('nombre').touched
    );
  }
}
