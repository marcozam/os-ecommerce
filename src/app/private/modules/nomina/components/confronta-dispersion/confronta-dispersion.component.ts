import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DispersionBanorteDto, Empleado } from 'models/nominas';
import { Empresa } from 'models';
import { _listaEmpleadosMock } from 'mocks/nominas';

@Component({
  selector: 'app-confronta-dispersion',
  templateUrl: './confronta-dispersion.component.html',
  styleUrls: ['./confronta-dispersion.component.scss']
})
export class ConfrontaDispersionComponent implements OnInit {

    ngOnInit() { }

    tableData: {  Empleado: Empleado, Movimiento: DispersionBanorteDto, checked: boolean }[];
    tableColumns = ['selected', 'nombre', 'patron', 'importe', 'mensaje'];
    patrones: Empresa[] = [];
    filtros = [];
    private comprobante;

    get tableView() {
        if (this.filtros.length > 0 ) {
            return this.tableData.filter(row => {
                return this.filtros.includes(row.Empleado.patron.key);
            });
        }
        return this.tableData;
    }

    validateData(event) {
        const list: DispersionBanorteDto[] = event.Movimientos,
            htmlComprobante: string = event.html;
        this.comprobante = htmlComprobante;
        this.patrones = [];
        this.tableData = list.map(Movimiento => {
            const Empleado = _listaEmpleadosMock.find(emp => emp.datosPersonales.nombreCompleto.toUpperCase().trim() === Movimiento.Nombre.toUpperCase());
            if (Empleado) {
                if (Empleado.patron && !this.patrones.includes(Empleado.patron)) {
                  this.patrones = [ ...this.patrones, Empleado.patron ];
                }
            }
            return { Empleado, Movimiento, checked: true };
        });
    }

    checkToggle(item) {
        const row = this.tableData.find(r => r.Empleado.key === item.Empleado.key && r.Movimiento.Importe === item.Movimiento.Importe);
        row.checked = !row.checked;
    }

    print(registros: string, registro: number, importe: number, registroRechazo: number, importeRechazo: number, registroAplicado: number, importeAplicado: number) {
        // <span id="lblRegistros">25</span><br />
        // <span id="lblImporte">$ 85,115.08</span>
        const currencyPipe = new CurrencyPipe('es_MX');
        const tempObj = document.createElement('div');
        tempObj.innerHTML = this.comprobante;
        const table = tempObj.querySelector('#dgDispersion>tbody'),
            lblRegistros = tempObj.querySelector('#lblRegistros'),
            lblRegistrosAplicados = tempObj.querySelector('#lblTotalRegistrosAplicados'),
            lblRegistrosRechazados = tempObj.querySelector('#lblTotalRegistrosRechazados'),
            lblIimporte = tempObj.querySelector('#lblImporte'),
            lblIimporteAplicados = tempObj.querySelector('#lblTotalImporteAplicados'),
            lblIimporteRechazados = tempObj.querySelector('#lblTotalImporteRechazados');
        table.innerHTML = registros;
        lblRegistros.innerHTML = registro.toString();
        lblIimporte.innerHTML = currencyPipe.transform(importe, '$');
        if (lblRegistrosAplicados) {
            lblRegistrosAplicados.innerHTML = registroAplicado.toString();
        }
        if (lblRegistrosRechazados) {
            lblRegistrosRechazados.innerHTML = registroRechazo.toString();
        }
        if (lblIimporteAplicados) {
            lblIimporteAplicados.innerHTML = currencyPipe.transform(importeAplicado, '$');
        }
        if (lblIimporteRechazados) {
            lblIimporteRechazados.innerHTML = currencyPipe.transform(importeRechazo, '$');
        }
        const mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write(tempObj.innerHTML);
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
    }

    generarComprobante() {
        const rows = this.tableView.filter(row => row.checked);
        console.log('Total Rows', this.tableView.length, 'Checked', rows.length);
        let importeTotal = 0, importeAplicado = 0, nAceptados = 0;
        let rowsHtml = [`<tr align="center" style="color:Black;font-weight:bold;font-style:normal;text-decoration:none;white-space:nowrap;">
            <td align="left" style="font-weight:bold;font-style:normal;text-decoration:none;white-space:nowrap;">No. Empleado</td>
            <td align="left" style="font-weight:bold;font-style:normal;text-decoration:none;white-space:nowrap;">Nombre</td>
            <td style="white-space:nowrap;">Tipo Cuenta</td>
            <td align="left" style="font-weight:bold;font-style:normal;text-decoration:none;white-space:nowrap;">No. de Cuenta</td>
            <td>Importe</td>
            <td style="width:90px;">Estatus</td>
            <td>Código</td>
            <td>Descripción</td>
        </tr>`];
        rowsHtml = [ ...rowsHtml, ...rows.map(row => {
                const importe = Number(row.Movimiento.Importe.replace(/[^0-9.-]+/g, ''));
                importeTotal += importe;
                if (row.Movimiento.Estatus === 'APLICADO') {
                    importeAplicado += importe;
                    nAceptados++;
                }
                return `<tr align="center" style="font-size:XX-Small;font-weight:normal;font-style:normal;text-decoration:none;white-space:nowrap;">
                    <td align="left" style="font-weight:normal;font-style:normal;text-decoration:none;white-space:nowrap;">${row.Movimiento.NoEmpleado}</td>
                    <td class="celdaLeft" style="font-weight:normal;font-style:normal;text-decoration:none;white-space:nowrap;">${row.Movimiento.Nombre}</td>
                    <td>${row.Movimiento.TipoCuenta}</td>
                    <td align="left" style="font-weight:normal;font-style:normal;text-decoration:none;">${row.Movimiento.NoCuenta}</td>
                    <td align="right">${row.Movimiento.Importe}</td>
                    <td align="center" style="font-weight:normal;font-style:normal;text-decoration:none;">${row.Movimiento.Estatus}</td>
                    <td>${row.Movimiento.Codigo}</td>
                    <td align="left" style="font-weight:normal;font-style:normal;text-decoration:none;white-space:nowrap;">${row.Movimiento.Mensaje}</td>
                </tr>`;
            })];
        this.print(
            rowsHtml.join(''),
            rows.length,
            importeTotal,
            rows.length - nAceptados,
            importeTotal - importeAplicado,
            nAceptados,
            importeAplicado
        );
    }
}
