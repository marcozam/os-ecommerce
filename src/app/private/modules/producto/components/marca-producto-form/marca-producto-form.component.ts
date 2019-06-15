import { Component, ChangeDetectionStrategy } from '@angular/core';
// Models
import { MarcaProducto } from 'models';
// Components
import { OSBaseFormComponent } from 'app/common';

@Component({
  selector: 'app-marca-producto-form',
  templateUrl: './marca-producto-form.component.html',
  styleUrls: ['./marca-producto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoFormComponent extends OSBaseFormComponent<MarcaProducto> {
  constructor() { super(); }
}
