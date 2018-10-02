import { Component, ChangeDetectionStrategy } from '@angular/core';
// Component
import { OSBaseFormComponent } from 'app/modules/shared';
// Model
import { CategoriaProducto } from 'app/models';

@Component({
  selector: 'app-categoria-producto-form',
  templateUrl: './categoria-producto-form.component.html',
  styleUrls: ['./categoria-producto-form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaProductoFormComponent extends OSBaseFormComponent<CategoriaProducto> {
  get catalogoID() { return this.form.value.catalogoID; }
}
