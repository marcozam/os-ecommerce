import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GrupoCategoriaProducto, CategoriaProducto } from 'app/models';

@Component({
  selector: 'app-grupo-categoria',
  templateUrl: './grupo-categoria.component.html',
  styleUrls: ['./grupo-categoria.component.scss']
})
export class GrupoCategoriaComponent {

  @Input() parent: FormGroup;
  @Input() categoria: CategoriaProducto;

  grupos: GrupoCategoriaProducto[];
  nombreGrupo: string;

  get usaGrupos(): boolean {
    return this.parent.value.tieneGrupos;
  }

  constructor() { this.grupos = []; }

  addGroup(value: string) {
    if (value) {
      this.nombreGrupo = '';
      this.grupos = [ ...this.grupos, new GrupoCategoriaProducto(value, this.categoria)];
    }
  }

}
