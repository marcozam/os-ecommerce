import { Input, EventEmitter, Output, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
// Models
import { FormSaveEvent, BaseCatalog } from 'app/models';
// Constants
import { WARNING_TITLE, LEAVE_WARNING_MESSAGE, MessageTypes } from 'app/constants';
// TODO: Move to other place
import { DialogBoxService } from 'app/services/dialog-box.service';

export abstract class OSBaseFormComponent<T extends BaseCatalog> {
    private hasPendingChanges: boolean;
    @Output() onSaveTrigger = new EventEmitter<FormSaveEvent<T>>();

    private _form: FormGroup;
    @Input()
    get form(): FormGroup { return this._form; }
    set form(value: FormGroup) {
        this._form = value;
        if (this.hasPendingChanges) {
            this.form.patchValue(this.value);
        }
    }

    private _value: T;
    @Input()
    get value(): T { return this._value; }
    set value(value: T) {
        this._value = value;
        if (this.form) {
            if (this.value) { this.form.patchValue(this.value); }
        } else { this.hasPendingChanges = true; }
    }

    constructor(
        private dialog: DialogBoxService,
        private router: Router,
        private route: ActivatedRoute
    ) { this.hasPendingChanges = false; }

    onSave() {
        if (this.form.invalid) { return; }
        const clone = Object.create(this.value);
        this.onSaveTrigger.emit({
            new: Object.assign(clone, this.form.value),
            old: this.value
        });
    }

    goBack() { this.router.navigate(['../'], { relativeTo: this.route}); }

    onCancel() {
        if (this.value && this.value.hasChanges(this.form.value)) {
            this.dialog.openDialog(WARNING_TITLE, LEAVE_WARNING_MESSAGE,
                {
                    type: MessageTypes.WARNING,
                    showButtons: true,
                    onClose: result => { if (result) { this.goBack(); }}
                });
        } else { this.goBack(); }
    }
}
