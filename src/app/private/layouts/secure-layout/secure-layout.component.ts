import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
// RxJs
import { map, tap } from 'rxjs/operators';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store';
import { MatDialog } from '@angular/material/dialog';
import { SucursalSelectionComponent } from '../modals/sucursal-selection/sucursal-selection.component';

@Component({
  selector: 'app-secure-layout',
  templateUrl: './secure-layout.component.html',
  styleUrls: ['./secure-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecureLayoutComponent implements OnInit {

  appName = 'OS';
  title = 'OS';

  userInfo$ = this.store$.select(fromStore.getUserPersona).pipe(
    map(({ nombre, apellidoPaterno }) =>
      `${nombre} ${apellidoPaterno}`));

  activeSucursal$ = this.store$.select(fromStore.selectActiveSucursal).pipe(
    tap(sucursal => {
      if (!sucursal) {
        this.dialog.open(SucursalSelectionComponent);
      }
    })
  );

  constructor(
    private store$: Store<fromStore.RootState>,
    private dialog: MatDialog,
    titleService: Title,
    router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(this.appName + ' | ' + title);
        this.setTitle(title);
      }
    });
  }

  ngOnInit() { }

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
