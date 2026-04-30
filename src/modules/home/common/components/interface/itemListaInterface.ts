export interface ItemLista {
  id: number;
  tipo: "banco" | "carpeta";
  nombre: string;
  descripcion?: string;
  fecha: string;
  reactivos?: number;
  bancos?: number;
  estatus?: string;
  icono: string;
}
