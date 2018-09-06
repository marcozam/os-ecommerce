import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Models
import { BaseCatalog } from 'app/models';
// Constants
import { WARNING_TITLE, LEAVE_WARNING_MESSAGE, MessageTypes } from 'app/constants';
// TODO: Move to other place
import { DialogBoxService } from 'app/services/dialog-box.service';

export abstract class OSBaseFormContainer<T extends BaseCatalog>
implements OnInit {
    form: FormGroup;
    loading$: Observable<boolean>;
    // TODO: Find a nicer way to do it.
    item: T;
    item$: Observable<T>;

    constructor(
        private dialog: DialogBoxService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.item$.subscribe(value => this.item = value);
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
                    type: MessageTypes.WARNING,
                    showButtons: true,
                    onClose: result => { if (result) { this.goBack(); }}
                });
        } else { this.goBack(); }
    }
}
