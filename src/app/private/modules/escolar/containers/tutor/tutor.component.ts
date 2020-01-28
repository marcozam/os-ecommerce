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
import { OSBaseFormContainer } from 'app/common-forms/components';
import { PERSONA_FORM } from 'app/common-forms/builders';
// Models
import { Tutor } from 'models/escolar';
import { Persona } from 'models/general';
import { ITutor } from '../../components';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})
export class TutorComponent extends OSBaseFormContainer<Tutor, ITutor> implements OnInit {

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
    this.item = new Tutor(new Persona());
    this.form = this.form = this.fb.group({
      datosPersonales: this.fb.group(PERSONA_FORM())
    });
  }
}
