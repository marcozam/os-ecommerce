import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OnInit, OnDestroy } from '@angular/core';
// RxJS
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
// NgRx
import { Actions } from '@ngrx/effects';
// Models
import { BaseCatalog, MessageAction, DialogMessage } from 'app/models';
// Notifications
import {
    WARNING_TITLE,
    LEAVE_WARNING_MESSAGE,
    NOTIFICATION_TYPES
} from 'app/notifications';
// TODO: Move to other place
import { DialogBoxService } from 'app/services/dialog-box.service';

export abstract class OSBaseFormContainer<T extends BaseCatalog>
implements OnInit, OnDestroy {

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
        successAction: any,
        failAction: any,
        protected messages: any
    ) {
        // OnSuccess
        actions$.ofType(successAction).pipe(
            takeUntil(this.destroyed$),
            tap((action: MessageAction) => { this.openMessage(action, () => { this.goBack(); }); })
        ).subscribe();
        // OnFail
        actions$.ofType(failAction).pipe(
            takeUntil(this.destroyed$),
            tap((action: MessageAction) => { this.openMessage(action); })
        ).subscribe();
    }

    //#region Angular LifeCycle Hooks
    ngOnInit() { this.item$.subscribe(value => { this.item = value; }); }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    //#endregion

    protected openMessage(action: MessageAction, onClose?: Function) {
        const messageLabel: DialogMessage = this.messages[action.messageSection][action.messageCode];
        this.dialog.openDialog(messageLabel.title, messageLabel.message, {
            type: messageLabel.type,
            onClose: onClose
        });
    }

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
