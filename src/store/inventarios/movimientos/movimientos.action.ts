import { CREATE_ACTION_RUTIN, CREATE_ACTION_RUTIN_WITHOUT_INITIAL } from '../../helpers';
import { namespace } from '../constants';
// Models
import { OSPeriodo } from 'app/common';
import { Inventario, MovimientoInventario } from 'models/inventario';

// Actions
export const {
  initial: GetMovimientosInventario,
  success: GetMovimientosInventarioSuccess,
  fail: GetMovimientosInventarioFail,
} = CREATE_ACTION_RUTIN<OSPeriodo, MovimientoInventario[], any>(`${namespace} Load All Movimientos`);

export const {
  initial: GetInventario,
  success: GetInventarioSuccess,
  fail: GetInventarioFail,
} = CREATE_ACTION_RUTIN_WITHOUT_INITIAL<Inventario[], any>(`${namespace} Load Inventario`);


