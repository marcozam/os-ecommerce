import { MovimientoInventario, Inventario } from 'models/inventario';

export interface InventarioState {
  movimientos: MovimientoInventario[];
  inventario: Inventario[];
}
