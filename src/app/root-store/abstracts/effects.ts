import { Actions, Effect } from '@ngrx/effects';

import { GenericService } from 'app/services/generic.service';
import { BaseCatalog } from 'app/models';

export abstract class OSBaseEffect<T extends BaseCatalog, TService extends GenericService<T>> {
    constructor(private actions$: Actions, private service: TService) { }
}
