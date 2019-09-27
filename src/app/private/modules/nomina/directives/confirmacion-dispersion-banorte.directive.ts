import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { DispersionBanorteDto } from 'models';

@Directive({
  selector: '[confirmacionDispersionBanorte]'
})
export class ConfirmacionDispersionBanorteDirective {

    constructor() { }

    @Output() dataProccess: EventEmitter<{ Movimientos: DispersionBanorteDto[], html: string}> = new EventEmitter();

    @HostListener('change', ['$event.srcElement']) onFileChange(src) {
        this.proccessData(src.files);
    }

    private proccessData(files: FileList) {
        for (let i = 0, f; f = files[i]; i++) {
            const reader = new FileReader();
            reader.onload = (data) => this.onFileProcess(data);
            reader.readAsText(f);
        }
    }

    private onFileProcess(data) {
        const result = data.target['result'];
        const tempObj = document.createElement('div');
        tempObj.innerHTML = result;
        const rows = tempObj.querySelectorAll('#dgDispersion>tbody>tr');
        let infoEmpleados: DispersionBanorteDto[]  = [];
        for (let i = 1, r; r = rows[i]; i++) {
            const cells = r.querySelectorAll('td');
            const empleado: DispersionBanorteDto = {
                NoEmpleado: this.cleanText(cells[0].innerText),
                Nombre: this.cleanText(cells[1].innerText),
                TipoCuenta: this.cleanText(cells[2].innerText),
                NoCuenta: this.cleanText(cells[3].innerText),
                Importe: this.cleanText(cells[4].innerText),
                Estatus: this.cleanText(cells[5].innerText),
                Codigo: this.cleanText(cells[6].innerText),
                Mensaje: this.cleanText(cells[7].innerText)
            };
            infoEmpleados = [...infoEmpleados, empleado];
        }
        this.dataProccess.emit({ Movimientos: infoEmpleados, html: result });
        // tempObj.remove();
    }

    private cleanText(text) {
        return text.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ').trim();
    }
}
