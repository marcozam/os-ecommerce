import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OSAuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: OSAuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard');
    console.log(next);
    if (this.auth.isUserValid) {
      return true;
    } else {
      console.log(state.url);
      return false;
    }
  }
}
