import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OnInit, OnDestroy } from '@angular/core';
// RxJS
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
// NgRx
import { Actions } from '@ngrx/effects';
// Models
import { BaseCatalog } from 'app/models';
// Notifications
import { WARNING_TITLE, LEAVE_WARNING_MESSAGE, NOTIFICATION_TYPES } from 'app/notifications';
// Services
import { DialogBoxService } from 'app/services/dialog-box.service';

export abstract class OSBaseFormContainer<T extends BaseCatalog> implements OnInit, OnDestroy {
    protected destroyed$ = new Subject<boolean>();
    form: FormGroup;
    loading$: Observable<boolean>;
    // TODO: Find a nicer way to do it.
    item: T;
    item$: Observable<T>;

    constructor(
        protected dialog: DialogBoxService,
        protected actions$: Actions,
        private router: Router,
        private route: ActivatedRoute,
        successAction?: string
    ) {
        if (successAction) {
            actions$.ofType(successAction).pipe(
                takeUntil(this.destroyed$), tap(() => { this.goBack(); })
            ).subscribe();
        }
    }

    //#region Angular LifeCycle Hooks
    ngOnInit() { this.item$.subscribe(value => { this.item = value; }); }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    //#endregion

    protected onSave(newItem: T) { throw new Error('OnSave funciont not implemnted'); }

    onContinue() {
        if (this.form.invalid) { return; }
        const clone = Object.create(this.item);
        const newValue = Object.assign(clone, this.form.value);
        this.onSave(newValue);
    }

    goBack() { this.router.navigate(['../'], { relativeTo: this.route}); }

    onCancel() {
        if (this.item && this.item.hasChanges(this.form.value)) {
            this.dialog.openDialog(WARNING_TITLE, LEAVE_WARNING_MESSAGE,
                {
                    type: NOTIFICATION_TYPES.WARNING,
                    showButtons: true,
                    onClose: result => { if (result) { this.goBack(); }}
                });
        } else { this.goBack(); }
    }
}
