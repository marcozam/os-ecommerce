import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// Services
import { BaseHttpService } from 'services/http';

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
        this.db.getData(params).subscribe(value => {
            console.log(value);
        });
    }
}
