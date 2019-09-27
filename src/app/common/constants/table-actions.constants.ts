import { OSTableActions } from '../models';

export const defaultTableActions: OSTableActions[] = [
    new OSTableActions('new', 'Nuevo Elemento', 'primary', true, 'add_circle_outline'),
    new OSTableActions('edit', 'Editar', 'primary', false, 'edit'),
    new OSTableActions('delete', 'Eliminar', 'warn', false, 'delete')
];
