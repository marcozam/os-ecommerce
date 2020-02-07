import { Component, OnInit, Input } from '@angular/core';
 import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
 // NgRx
import { Store } from '@ngrx/store';
import * as fromStore from 'store/crm';
// Models
import { TipoDatosContacto, DatoContacto } from 'models/crm';
// Constants
import { OSValidators } from 'app/common/validators';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.scss'],
})
export class DatosContactoComponent implements OnInit {

  tiposDatos$ = this.store$.select(fromStore.selectAllTipoDatoContacto);
  fields$ = this.store$.select(fromStore.selectSelectedContacto).pipe(
    withLatestFrom(this.tiposDatos$),
    map(([contacto, tipoDatos]) => {
      return contacto.datos;
    })
  );

  fields: { control: FormControl, value: DatoContacto}[];

  @Input() datos: DatoContacto[];

  constructor(
    private fb: FormBuilder,
    private store$: Store<fromStore.CRMModuleState>
  ) { }

  ngOnInit() {
    /*
    this._service.source$.subscribe(list => {
      // Workarround to remove relational field
      this.tiposDato = list.filter(td => td.catalogoID === 0);
      this.loadInitialFields(this.tiposDato.filter(td => td.visible));
    });
    */
  }

  loadInitialFields(fields: TipoDatosContacto[]) {
    this.fields = fields.map(td => this.setField(td));
  }

  setField(tipo: TipoDatosContacto, value?: string) {
    const dc = new DatoContacto();
    dc.tipoDatoContacto = tipo;
    // Creates Form Control
    const fc = new FormControl(value ? value : '', { updateOn: 'blur' });
    switch (tipo.validacion) {
      case 'email':
        fc.setValidators(OSValidators.emailOrEmpty);
        break;
      case 'tel':
        fc.setValidators(Validators.pattern('[0-9]*'));
        break;
    }
    fc.valueChanges.subscribe(value => {
      if (fc.valid) { dc.valor = value; }
    });
    return { control: fc, value: dc };
  }

  addField(tipo: TipoDatosContacto) {
    this.fields.push(this.setField(tipo));
  }
}
