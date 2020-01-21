import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OnInit, OnDestroy } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
// NgRx
import { ActionCreator } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
// Models
import { IBaseCatalog } from 'models';
// Notifications
import { WARNING_TITLE, LEAVE_WARNING_MESSAGE, NOTIFICATION_TYPES } from 'app/notifications';
// Services
import { DialogBoxService } from 'app/common/services';
import { OSBaseDestroyComponent } from './os-base-destroy.component';

export abstract class OSBaseFormContainer<T extends IBaseCatalog, F> extends OSBaseDestroyComponent implements OnInit, OnDestroy {
  form: FormGroup;
  loading$: Observable<boolean>;
  // TODO: Find a nicer way to do it.
  item: T;
  item$: Observable<T>;

  constructor(
    protected dialog: DialogBoxService,
    protected actions$: Actions,
    protected router: Router,
    protected route: ActivatedRoute,
    successAction?: string | ActionCreator
  ) {
    super();
    if (successAction) {
      actions$.pipe(
        ofType(successAction),
        takeUntil(this.destroyed$),
      ).subscribe(() => this.goBack());
    }
  }

  //#region Angular LifeCycle Hooks
  ngOnInit() {
    this.item$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe(value => { this.item = value; });
  }
  //#endregion

  protected onSave(newItem: F) {
    throw new Error('OnSave funciont not implemnted');
  }

  onContinue() {
    if (this.form.invalid) {
      // TODO: Have a way to mark all invalid fields
      return;
    }
    const clone = Object.create(this.item);
    const newValue = Object.assign(clone, this.form.value);
    this.onSave(newValue);
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  onCancel() {
    if (this.form.dirty) {
      this.dialog.openDialog(WARNING_TITLE, LEAVE_WARNING_MESSAGE, {
          type: NOTIFICATION_TYPES.WARNING,
          showButtons: true,
          onClose: result => { if (result) { this.goBack(); }}
        });
    } else { this.goBack(); }
  }

  onActionTriggered(action: string) {
    switch (action) {
      case 'cancel':
        this.onCancel();
        break;
      case 'save':
        this.onContinue();
        break;
    }
  }
}
