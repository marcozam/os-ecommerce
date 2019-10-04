import { OSActions } from '../models';

export const defaultTableActions: OSActions[] = [
  new OSActions('new', 'Nuevo Elemento', 'primary', true, 'add_circle_outline'),
  new OSActions('edit', 'Editar', 'primary', false, 'edit'),
  new OSActions('delete', 'Eliminar', 'warn', false, 'delete')
];

export const defaultFormActions: OSActions[] = [
  new OSActions('cancel', 'Cancelar', 'warn', false, 'clear'),
  new OSActions('save', 'Guardar', 'primary', false, 'save')
];
