import { CREATE_ACTION_RUTIN } from '../../helpers';
import { namespace } from '../constants';
// Models
import { OSPeriodo } from 'app/common';
import { MovimientoInventario } from 'models/inventario';

const entityName = 'Movimiento';

// Actions
export const {
  initial: GetMovimientosInventario,
  success: GetMovimientosInventarioSuccess,
  fail: GetMovimientosInventarioFail,
} = CREATE_ACTION_RUTIN<OSPeriodo, MovimientoInventario[], void>(`${namespace} Load All ${entityName}s`);
