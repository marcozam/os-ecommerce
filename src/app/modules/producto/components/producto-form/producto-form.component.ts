import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Models
import { Producto, CategoriaProducto } from 'app/models/productos';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() categoria: CategoriaProducto;

  constructor() { }

  ngOnInit() { }

  onCancelar(data: any) {
    console.log(data);
  }

  onSave(data: Producto) {
    console.log(data);
  }
}
