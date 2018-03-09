import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// Services
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';

@Injectable()
export class OSAuthService {

    authState$: Subject<any> = new Subject();

    constructor(private db: BaseAjaxService) {

    }

    login(userName: string, password: string) {
        const params = this.db.createParameter('SYS0001', 1, {
            V8: userName,
            V9: password
        });
        this.db.getData(params).subscribe(value => {
            console.log(value);
        });
    }
}
