import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
// RxJs
import { map } from 'rxjs/operators';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/auth';

@Component({
  selector: 'app-secure-layout',
  templateUrl: './secure-layout.component.html',
  styleUrls: ['./secure-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecureLayoutComponent {

  userInfo$ = this.store$.select(fromStore.getUserPersona).pipe(
    map(({ nombre, apellidoPaterno }) =>
      `${nombre} ${apellidoPaterno}`
      .toLocaleLowerCase())
  );

  constructor(titleService: Title, router: Router, private store$: Store<fromStore.AuthModuleState>) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(this.appName + ' :: ' + title);
        this.setTitle(title);
      }
    });
  }

  appName = 'OS';
  title = 'OS';

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  setTitle(pTitle) { this.title = pTitle; }
}
