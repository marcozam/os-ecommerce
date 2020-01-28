import { CREATE_CRUD_ACTIONS } from '../../helpers';
import { namespace } from '../constants';
// Models
import { TipoMovimientoInventario } from 'models/inventario';

const entityName = 'Tipo Movimiento';

// Actions
export const {
  initialLoad: GetTiposMovimientoInventario,
  successLoad: GetTiposMovimientoInventarioSuccess,
  failLoad: GetTiposMovimientoInventarioFail,
  initialGet: GetTiposMovimientoInventarioByID,
  successGet: GetTiposMovimientoInventarioByIDSuccess,
  failGet: GetTiposMovimientoInventarioByIDFail,
  initialSave: SaveTiposMovimientoInventario,
  successSave: SaveTiposMovimientoInventarioSuccess,
  failSave: SaveTiposMovimientoInventarioFail
} = CREATE_CRUD_ACTIONS<TipoMovimientoInventario>(namespace, entityName);
