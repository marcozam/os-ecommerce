import { Observable, merge } from 'rxjs';
import { ILoading } from '../services/base-ajax.service';

export class OSBaseComponent implements ILoading {
    loading$: Observable<boolean>;
    showLoading = true;
    constructor(services: Observable<boolean>[]) {
        this.loading$ = merge(...services);
        /*
        this.loading$.subscribe(() => {
            // Is there any service busy?
            const busyServices = services.filter(s => s.isLoading);
            this.isLoading = busyServices.length > 0;
        });
        */
    }
}
