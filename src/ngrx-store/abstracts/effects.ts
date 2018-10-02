import { Actions } from '@ngrx/effects';
import { GenericService } from 'services/generic.service';
import { IBaseCatalog } from 'app/common';

export abstract class OSBaseEffect<T extends IBaseCatalog, TService extends GenericService<T>> {
    constructor(private actions$: Actions, private service: TService) { }
}
