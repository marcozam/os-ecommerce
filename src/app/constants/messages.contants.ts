export enum MessageTypes {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
}

export enum MessageCode {
    ITEM_SAVED = 200,
    GENERAL_ERROR = 400,
    ITEM_NOT_FOUND = 401,
    NO_DATA = 402,
}

// Success
export const SUCCESS_TITLE = 'Exito!!';
export const SUCCESS_MESSAGE = 'Informacion guardada con exito.';
// Warning
export const WARNING_TITLE = 'Advertencia';
export const LEAVE_WARNING_MESSAGE = 'Se perderan los datos capturados.¿Desea continuar?';
// Error
export const ERROR_TITLE = 'Ups!!';
export const ERROR_MESSAGE = 'Ha ocurrido un error al intentar guardar la informacion';
export const INTERNAL_SERVER_ERROR_MESSAGE = 'Hubo un problema en el Servidor. Contacte al Administrador';
export const AUTH_ERROR_MESSAGE = 'No se ha establecido una relacion. de confianza con el servidor';
export const NOT_ALLOW_ERROR_MESSAGE = 'No permitido';
export const ITEM_NOT_EXIST_ERROR_MESSAGE = 'La información a la que intenta acceder no se encuentra';
