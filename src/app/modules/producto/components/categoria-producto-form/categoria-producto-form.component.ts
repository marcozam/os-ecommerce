import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CategoriaProducto } from 'app/models';
import { OSBaseFormComponent } from 'app/modules/shared';

@Component({
  selector: 'app-categoria-producto-form',
  templateUrl: './categoria-producto-form.component.html',
  styleUrls: ['./categoria-producto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaProductoFormComponent extends OSBaseFormComponent<CategoriaProducto> {
  get catalogoID() { return this.form.value.catalogoID; }
}
