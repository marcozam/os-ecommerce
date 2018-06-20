import { Component, OnInit, Input } from '@angular/core';
// Models
import { Producto, CategoriaProducto } from 'app/models/productos/producto.models';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {

  @Input() product: Producto;
  @Input() categorias: CategoriaProducto[];

  constructor() { }

  ngOnInit() { }

  onCancelar(data: any) {
    console.log(data);
  }

  onSave(data: Producto) {
    console.log(data);
  }
}
