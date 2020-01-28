import { Injectable } from '@angular/core';
// RxJs
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Services
import { BaseHttpService } from '../base-http.service';
// Models
import { Persona } from 'models';
import { User } from 'models/auth/user.model';

@Injectable()
export class AuthService {

  authState$: Subject<any> = new Subject();
  isUserValid = true;

  constructor(private db: BaseHttpService) {}

  login(userName: string, password: string): Observable<User> {
    const params = this.db.createParameter('SYS0001', 1, {
        V8: userName,
        V9: password
    });
    return this.db.getData(params).pipe(
      map(({ Table, Table1, Table2 }) => {
        console.log('SYS0001_V0=1', Table, Table1, Table2);
        if (Table1 && Table1.length > 0) {
          const { C0, C1, P0, P1, P2, P3 } = Table1[0];
          return new User(C0, C1, new Persona(P1, P2, P3, P0));
        }
        return null;
      })
    );
  }
}
