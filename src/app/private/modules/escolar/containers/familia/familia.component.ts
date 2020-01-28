import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// RxJs
import { combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// Common Forms
import { PERSONA_FORM } from 'app/common-forms/builders';
import { OSBaseDestroyComponent } from 'app/common-forms/components';

import {
  ITutorFullForm,
  IAlumnoFullForm,
  TUTOR_FORM,
  ALUMNO_FORM,
} from '../../components';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent extends OSBaseDestroyComponent implements OnInit, OnDestroy {
  form: FormGroup;
  value: {
    padre: ITutorFullForm;
    madre: ITutorFullForm;
    alumno: IAlumnoFullForm;
  };

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    // this.item = new Tutor(new Persona());
    this.form = this.fb.group({
      padre: this.tutorFormBuilder(),
      madre: this.tutorFormBuilder(),
      alumnos: this.fb.array([
        this.alumnoFormBuilder()
      ]),
    });

    /*
    combineLatest(
      this.form.get('padre.datosPersonales.apellidoPaterno').valueChanges,
      this.form.get('madre.datosPersonales.apellidoPaterno').valueChanges,
    ).pipe(
      takeUntil(this.destroyed$),
    ).subscribe(([paterno, materno]) => {
      this.form.get('alumno.datosPersonales.apellidoPaterno').patchValue(paterno);
      this.form.get('alumno.datosPersonales.apellidoMaterno').patchValue(materno);
    });
    */
  }

  private tutorFormBuilder() {
    return this.fb.group({
      datosPersonales: this.fb.group(PERSONA_FORM()),
      tutor: this.fb.group(TUTOR_FORM())
    });
  }

  private alumnoFormBuilder() {
    return this.fb.group({
      datosPersonales: this.fb.group(PERSONA_FORM(true)),
      alumno: this.fb.group(ALUMNO_FORM())
    });
  }
}
