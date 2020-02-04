import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// NgRx
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import * as fromStore from 'store/base-catalogs';
// Services
import { DialogBoxService } from 'app/common/services';
// Common forms
import { OSBaseFormContainer } from 'app/common-forms/components';
import { EMPRESA_FORM } from 'app/common-forms';
// Models
import { Empresa, IEmpresa } from 'models';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.scss']
})
export class PatronComponent extends OSBaseFormContainer<Empresa, IEmpresa> implements OnInit {

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
    this.item = new Empresa(0, '');
    this.form = this.fb.group(EMPRESA_FORM());
  }

  onSave({ nombre }) {
    console.log('On Save', nombre);
    this.store$.dispatch(fromStore.SaveEmpresaAction({
      payload: {
        value: new Empresa(0, nombre),
        oldValue: new Empresa(0, '')
      },
    }));
  }

}
