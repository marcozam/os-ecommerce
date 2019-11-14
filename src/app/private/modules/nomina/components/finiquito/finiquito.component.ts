import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment = require('moment');
import { GET_YEAR_DIFF, GET_DAYS_DIFF } from 'core/utils';
import { PERIODOS_TIEMPO, PERIODO_TIEMPO_KEY } from 'core/constants';

@Component({
  selector: 'app-finiquito',
  templateUrl: './finiquito.component.html',
  styleUrls: ['./finiquito.component.scss']
})
export class FiniquitoComponent implements OnInit {

  // TODO:
  // Agregar apartatdo Fiscal (Sueldo Diario, Fecha Ingreso) con deducciones,
  // y Dias de vacaciones pendientes

  // Mock data
  salarioMinimo = 80;
  primaVacacional = 0.25;
  periocidadPago = PERIODOS_TIEMPO;
  form: FormGroup;
  result: {
    sueldoDiario: number,
    anosAntiguedad: number,
    diasVacaciones?: number,
    diasAguinaldo?: number
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const endDate = moment(new Date());
    this.form = this.fb.group({
      sueldo: [this.salarioMinimo, Validators.required],
      periodoPago: [PERIODO_TIEMPO_KEY.Quincenal, Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaSalida: [endDate, Validators.required]
    });
  }

  calcular() {
    const value = this.form.value;
    const fechaIngreso = value.fechaIngreso.toDate(),
      fechaSalida = value.fechaSalida.toDate();

    const sueldoDiario = this.calcularSueldoDiario(value.sueldo, value.periocidadPago),
      anosAntiguedad = GET_YEAR_DIFF(fechaIngreso, fechaSalida),
      diasAguinaldo = this.diasProporcionalAguinaldo(fechaSalida),
      diasVacaciones = this.diasProporcionalVacaciones(fechaIngreso, fechaSalida, anosAntiguedad);
    this.result = {
      sueldoDiario,
      anosAntiguedad,
      diasAguinaldo,
      diasVacaciones
    };
  }

  diasProporcionalAguinaldo(fechaSalida: Date, diasAguinaldo = 15): number {
    const diasTranscuridos =  this.diasTranscuridosAno(fechaSalida);
    console.log('Aguinaldo Dias Transcuridos', diasTranscuridos);
    return this.proporcionalDias(diasTranscuridos, diasAguinaldo);
  }

  diasProporcionalVacaciones(fechaIngreso: Date, fechaSalida: Date, antigueda: number) {
    const diasVacaciones = this.diasVacaciones(antigueda + 1);
    let lastDay = new Date(fechaSalida.getFullYear(), fechaIngreso.getMonth(), fechaIngreso.getDate());
    if (lastDay > fechaSalida) {
      lastDay = new Date(lastDay.getFullYear() - 1, lastDay.getMonth(), lastDay.getDate());
    }
    const diasTranscuridos = GET_DAYS_DIFF(lastDay, fechaSalida);
    console.log('En este año corresponden', diasVacaciones,
      'Fecha Ult Año', lastDay,
      'Dias Transcuridos', diasTranscuridos);
    return this.proporcionalDias(diasTranscuridos, diasVacaciones);
  }

  proporcionalDias(diasTranscuridos: number, factor: number) {
    console.log('Proporcional de', diasTranscuridos, 'factor:', factor);
    factor = (diasTranscuridos / 365) * factor;
    return Math.round(factor * 100) / 100;
  }

  //#region Generico
  calcularSueldoDiario(sueldo: number, periodo = 3) {
    switch (periodo) {
      case 2:
        sueldo = sueldo / 7;
        break;
      case 3:
        sueldo = sueldo / 15;
        break;
      case 4:
        sueldo = sueldo / 30;
        break;
    }
    return Math.round(sueldo * 100) / 100;
  }

  diasVacaciones(year: number): number {
    if (year <= 4) {
      return 6 + ((year - 1) * 2);
    }
    const ant = Math.floor(year / 5);
    return 12 + (ant * 2);
  }

  diasTranscuridosAno(fecha: Date): number {
    const actYear = fecha.getFullYear(), begining = new Date(actYear, 0);
    return GET_DAYS_DIFF(begining, fecha);
  }
  //#endregion
}
