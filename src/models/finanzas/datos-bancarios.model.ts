import { TIPO_DATO_BANCARIO } from './tipo-dato-bancarion.enum';

export interface DatosBancarios {
  key: number;
  cuenta: string; // Cuenta, Clabe, # Tarjeta, etc
  bancoId: number;
  tipo: TIPO_DATO_BANCARIO; // Cuenta, Clabe, # Tarjeta
}
