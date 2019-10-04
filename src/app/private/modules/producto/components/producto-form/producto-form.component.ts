import { Component, Input } from '@angular/core';
// Models
import { Producto, CategoriaProducto } from 'models/productos';
// Components
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent extends OSBaseFormComponent<Producto> {
  @Input() categoria: CategoriaProducto;
  constructor() { super(); }
}
