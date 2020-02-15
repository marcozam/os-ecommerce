import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogActionsComponent } from '../../components/dialog-actions/dialog-actions.component';

import { Contacto } from 'models/crm';
import { Venta } from 'models/ventas';

import { ContactoService } from 'services/http/crm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  private ordenesPendientes: Venta[] = [];

  constructor(
    public dialog: MatDialog,
    private _route: Router,
    private _contactoService: ContactoService) {}

  onPersonaChange(item: any) {
    if (item.data.key === 0) {
      this._contactoService.save(item.data).subscribe((data: Contacto) => this.checkData(data));
    } else {
      if (item.exist) {
        this.checkData(item.data);
      } else {
        this._route.navigateByUrl('/optica/examen/' + item.data.key);
      }
    }
  }

  checkData(_contacto: Contacto) {
    /*
    this._ventaService.getOrdenesPendientesEntrega(0, _contacto.key)
    .subscribe(result => {
      this.ordenesPendientes = result;
      this.openDialog(_contacto);
    });
    */
  }

  openDialog(_contacto: Contacto, _onClose?: any) {
    const _actions = [
      { name: 'Realizar examen', route: '/optika/examen/' + _contacto.key },
      { name: 'Generar venta', route: '/optika/venta/' + _contacto.key },
      /*{ name: 'Historial de Compra', route: '/crm/historial/' + _contacto.key },*/
    ];

    if (this.ordenesPendientes.length > 0) {
      _actions.push({ name: `Ordenes por Entregar (${this.ordenesPendientes.length})`, route: '/caja/entregas/' + _contacto.key });
    }

    const dialogRef = this.dialog.open(DialogActionsComponent, {
      data: { title: '', actions: _actions }
    });

    if (_onClose) {
      dialogRef.afterClosed().subscribe(result => { _onClose(result); });
    }
  }
}
