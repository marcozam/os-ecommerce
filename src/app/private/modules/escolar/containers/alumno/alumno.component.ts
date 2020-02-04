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
import { Alumno, Persona } from 'models';
import { IAlumnoFullForm } from '../../components';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent extends OSBaseFormContainer<Alumno, IAlumnoFullForm> implements OnInit {

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
    this.item = new Alumno(new Persona());
    this.form = this.form = this.fb.group({
      datosPersonales: this.fb.group(PERSONA_FORM())
    });
  }
}
