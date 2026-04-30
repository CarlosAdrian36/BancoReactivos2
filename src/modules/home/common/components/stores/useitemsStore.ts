// /stores/useItemsStore.ts
import { defineStore } from "pinia";
import type { Banco } from "../interface/bancoInterface";
import type { Carpeta } from "../interface/carpetaInterface";
import type { ItemLista } from "../interface/itemListaInterface";

export const useItemsStore = defineStore("items", {
  state: () => ({
    bancos: [] as Banco[],
    carpetas: [] as Carpeta[]
  }),

  getters: {
    bancosLista(): ItemLista[] {
      return this.bancos.map((b) => ({
        id: b.id,
        tipo: "banco",
        nombre: b.nombre,
        descripcion: b.descripcion,
        fecha: b.fecha,
        reactivos: b.reactivos,
        estatus: b.estatus,
        icono: "fa-regular fa-file-lines fa-xl text-primary"
      }));
    },
    carpetasLista(): ItemLista[] {
      return this.carpetas.map((c) => ({
        id: c.id,
        tipo: "carpeta",
        nombre: c.nombre,
        fecha: c.fecha,
        bancos: c.bancos,
        icono: "fa-regular fa-folder fa-xl text-warning"
      }));
    },
    lista(): ItemLista[] {
      return [...this.carpetasLista, ...this.bancosLista];
    }
  },

  actions: {
    agregarBanco(banco: Banco) {
      this.bancos.push(banco);
    },

    agregarCarpeta(carpeta: Carpeta) {
      this.carpetas.push(carpeta);
    },
    editarCarpeta(id: number, data: Partial<Carpeta>) {
      console.log("Editando carpeta con id:", id, "y datos:", data);
      const carpeta = this.carpetas.find((c) => c.id === id);
      if (carpeta) {
        Object.assign(carpeta, data);
      }
    },
    eliminarItem(id: number, tipo: "banco" | "carpeta") {
      if (tipo === "banco") {
        this.bancos = this.bancos.filter((b) => b.id !== id);
      } else {
        this.carpetas = this.carpetas.filter((c) => c.id !== id);
      }
    }
  }
});
