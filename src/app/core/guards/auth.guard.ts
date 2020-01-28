import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanActivate,
  UrlSegment,
  CanLoad,
  Router,
  Route,
} from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'store/auth';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  private isAuthenticated$ = this.store$.select(fromStore.getUser).pipe(
    map(user => {
      if (!user) {
        this.router.navigate(['auth/login']);
      }
      return !!user;
    }),
    tap(isAuthenticated => console.log('isAuthenticated', isAuthenticated))
  );

  constructor(private store$: Store<fromStore.AuthModuleState>, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated$;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated$;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    console.log('canLoad');
    return this.isAuthenticated$;
  }
}
