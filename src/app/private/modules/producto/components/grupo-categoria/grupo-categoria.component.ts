import { Component } from '@angular/core';
// Component
import { OSBaseFormComponent } from 'app/common';
// Model
import { GrupoCategoriaProducto, CategoriaProducto } from 'models';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grupo-categoria',
  templateUrl: './grupo-categoria.component.html',
  styleUrls: ['./grupo-categoria.component.scss']
})
export class GrupoCategoriaComponent extends OSBaseFormComponent<CategoriaProducto> {
  grupos: GrupoCategoriaProducto[];
  nombreGrupo = '';

  get usaGrupos(): boolean {
    return this.form.value.tieneGrupos;
  }

  constructor() {
    super();
    this.grupos = [];
  }

  addGroup() {
    if (this.nombreGrupo) {
      this.grupos = [ ...this.grupos, new GrupoCategoriaProducto(this.nombreGrupo, this.value)];
      this.nombreGrupo = '';
      this.updateGroups();
    }
  }

  updateGroups() {
    const control = <FormArray>this.form.get('grupos');
    control.controls = this.grupos.map(() => new FormControl());
    control.patchValue(this.grupos);
  }
}
