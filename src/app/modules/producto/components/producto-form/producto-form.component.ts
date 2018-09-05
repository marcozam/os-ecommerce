import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Models
import { Producto, CategoriaProducto } from 'app/models/productos';
// Components
import { OSBaseFormComponent } from 'app/modules/shared';
// Services
import { DialogBoxService } from 'app/services/dialog-box.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent extends OSBaseFormComponent<Producto> {
  @Input() categoria: CategoriaProducto;
  constructor(dialog: DialogBoxService, router: Router, route: ActivatedRoute) {
    super(dialog, router, route);
  }
}
