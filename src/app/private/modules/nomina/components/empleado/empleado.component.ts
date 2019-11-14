import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// NgRx
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
// import * as fromStore from 'store/base-catalog';
// Core
import { PERIODO_TIEMPO_KEY } from 'core/constants';
// Services
import { DialogBoxService } from 'app/common/services';
// Common forms
import { OSBaseFormContainer } from 'app/common-forms/components';
import { PERSONA_FORM } from 'app/common-forms/builders';
// Models
import { Empresa, Empleado, Persona } from 'models';
// Mocks
import { listaClientesMock, _listaEmpleadosMock } from 'mocks/nominas';
import { NOMINAS_ROUTE_STATE_PARAMS } from '../../routing/constants';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent extends OSBaseFormContainer<Empleado> implements OnInit {
  patrones: Empresa[] = listaClientesMock;

  constructor(
    private fb: FormBuilder,
    private store$: Store<any>,
    dialog: DialogBoxService,
    actions$: Actions,
    router: Router,
    route: ActivatedRoute
  ) {
    super(dialog, actions$, router, route);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const employeeId = Number(params[NOMINAS_ROUTE_STATE_PARAMS.EMPLEADO_ID]);
      if (isNaN(employeeId)) {
        // Do new logic
      } else {
        const empleado = _listaEmpleadosMock.find(e => e.key === employeeId);
        this.item = empleado;
      }
    });
    this.form = this.fb.group({
      patronId: [0, Validators.required],
      fechaIngreso: [new Date(), Validators.required],
      NSS: ['', [Validators.required, Validators.maxLength(11)]],
      noEmpleado: [''],
      periocidadPagoId: [PERIODO_TIEMPO_KEY.Quincenal, Validators.required],
      datosPersonales: this.fb.group(PERSONA_FORM())
    });
  }

  onSave(newEmpleado: Empleado) {
    console.log('On Save', newEmpleado);
    const persona = Object.assign(new Persona(), newEmpleado.datosPersonales);
    console.log('Persona', persona);
  }
}
