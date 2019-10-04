import { Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Models
import { IBaseCatalog } from 'models';
import { FormSaveEvent } from 'app/common/models';

export abstract class OSBaseFormComponent<T extends IBaseCatalog> {
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

    constructor() { this.hasPendingChanges = false; }
}
