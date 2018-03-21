import { Observable } from 'rxjs/Observable';
import { ILoading } from '../services/base-ajax.service';

export class OSBaseComponent implements ILoading {
    loading$: Observable<boolean>;
    isLoading = false;
    showLoading = true;
    constructor(services: ILoading[]) {
        this.loading$ = Observable.merge(...services.map(s => s.loading$));
        this.loading$.subscribe(() => {
            // Is there any service busy?
            const busyServices = services.filter(s => s.isLoading);
            this.isLoading = busyServices.length > 0;
        });
    }
}
