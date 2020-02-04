import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// NgRx
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
// import * as fromStore from 'store/base-catalog';
// Services
import { DialogBoxService } from 'app/common/services';
// Common forms
import { PERSONA_FORM, OSBaseFormContainer } from 'app/common-forms';
// Models
import { Empresa, Empleado, Persona, RelacionLaboral } from 'models';
// Mocks
import { listaClientesMock, listaEmpleadosMock } from 'mocks/nominas';
import { NOMINAS_ROUTE_STATE_PARAMS } from '../../routing/constants';
import { EMPLEADO_FORM, RELACION_LABORAL_FORM, IEmpleadoFullForm } from '../../constants';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent extends OSBaseFormContainer<Empleado, IEmpleadoFullForm> implements OnInit {
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
      const empleado = isNaN(employeeId) ?
        new Empleado() : listaEmpleadosMock.find(e => e.key === employeeId);
      this.item = empleado;
    });
    this.form = this.fb.group({
      empleado: this.fb.group(EMPLEADO_FORM()),
      relacionLaboral: this.fb.group(RELACION_LABORAL_FORM()),
      datosPersonales: this.fb.group(PERSONA_FORM())
    });
  }

  onSave({ empleado, datosPersonales, relacionLaboral }) {
    const { patronId, fechaIngreso, periocidadPagoId } = relacionLaboral;
    const _persona = Object.assign(new Persona(), datosPersonales);
    const _empleado = Object.assign(new Empleado(), empleado);
    const _patron = this.patrones.find(p => p.key === patronId);
    _empleado.datosPersonales = _persona;
    const _relacion = new RelacionLaboral(_empleado.key, _patron, new Date(fechaIngreso), periocidadPagoId);
    _empleado.relacionesLaborales = [ _relacion ];
  }
}
