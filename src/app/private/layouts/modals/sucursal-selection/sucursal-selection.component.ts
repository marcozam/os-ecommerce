import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/base-catalogs';

@Component({
  selector: 'app-sucursal-selection',
  templateUrl: './sucursal-selection.component.html',
})
export class SucursalSelectionComponent {

  sucursales$ = this.store$.select(fromStore.selectAllSucursales);

  constructor(
    private store$: Store<fromStore.BaseCatalogsModuleState>,
    public dialogRef: MatDialogRef<SucursalSelectionComponent>) { }

  onClose() { this.dialogRef.close(); }

  sucursalSelected(payload: number) {
    this.store$.dispatch(fromStore.SetActiveSucursal({ payload }));
    this.dialogRef.close();
  }
}
