import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// Services
import { BaseHttpService } from '../base-http.service';

@Injectable()
export class OSAuthService {

    authState$: Subject<any> = new Subject();
    isUserValid = true;

    constructor(private db: BaseHttpService) {}

    login(userName: string, password: string) {
        const params = this.db.createParameter('SYS0001', 1, {
            V8: userName,
            V9: password
        });
        return this.db.getData(params);
    }
}
