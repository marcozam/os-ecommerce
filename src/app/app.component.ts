// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/loading-store';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  loading$ = this.store$.select(fromStore.getIsLoading);

  constructor(private store$: Store<fromStore.LoadingModuleState>) { }
}
