import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, EmailValidator, FormGroup } from '@angular/forms';
// NgRx
import { Store } from '@ngrx/store';
import * as fromStore from 'store';
// RxJs
import { combineLatest } from 'rxjs';
import { withLatestFrom, map, filter } from 'rxjs/operators';
// Common Forms
import { PERSONA_FORM } from 'app/common-forms';
// Models
import { TipoDatosContacto, Contacto } from 'models/crm';
import { Persona } from 'models/general';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent implements OnInit {

  datosContacto = { telefono: null, email: null, colonia: null };
  // get isNew(): boolean { return this.contactoID ? true : false; }

  data$ = combineLatest([
    this.store$.select(fromStore.selectSelectedPersona),
    this.store$.select(fromStore.selectSelectedContacto),
  ]).pipe(
    withLatestFrom(this.store$.select(fromStore.selectAllTipoDatoContacto)),
    map(([[persona, contacto], tipoDatos]) => {
      if (persona) {
        contacto.persona = persona;
      }
      return { contacto, tipoDatos };
    })
  );

  form: FormGroup;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  isChildValid = false;

  constructor(
    private fb: FormBuilder,
    private store$: Store<fromStore.RootState>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      persona: this.fb.group(PERSONA_FORM(true))
    });
  }

  /*
  getContactData() {
    if (this.contactoID) {
      this._contactoService.getByID(this.contactoID)
        .subscribe(item => {
          this.contacto = item;
          this.initialData = this.contacto.persona;

          this.datosContacto.telefono = item.datos.find(dc => dc.nombre === 'TELEFONO');
          this.datosContacto.email = item.datos.find(dc => dc.nombre === 'EMAIL');
          this.datosContacto.colonia = item.datos.find(dc => dc.nombre === 'LOCALIDAD');
        });
    }
  }
  */

  onPersonaChanged(event) {
    /*
    this.isChildValid = event.isValid;
    if (this.isChildValid) { this.contacto.persona = event.data; }
    */
  }

  cancel() { this.onCancel.emit(); }

  onSave() {
    // TODO: Add contact type
    // this.contacto.datos = datos;

    // ADD Store here
    /*
    this._personaService.save(this.contacto.persona)
      .subscribe((pRes: Persona) => {
        this.contacto.persona = pRes;
        this._contactoService.save(this.contacto)
          .subscribe((cRes) => this.onSaved(cRes));
      });
      */
  }

  // onSaved(data: Contacto) { this.onChange.emit({ Data: data, isNew: this.isNew }); }
}
