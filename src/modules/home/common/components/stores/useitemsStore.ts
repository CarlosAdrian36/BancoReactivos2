// /stores/useItemsStore.ts
import { defineStore } from "pinia";
import type { Banco } from "../interface/bancoInterface";
import type { Carpeta } from "../interface/carpetaInterface";

export const useItemsStore = defineStore("items", {
  state: () => ({
    bancos: [] as Banco[],
    carpetas: [] as Carpeta[]
  }),

  getters: {
    lista(state) {
      const bancosMap = state.bancos.map((b) => ({
        id: b.id,
        tipo: "banco",
        titulo: b.nombre,
        descripcion: b.descripcion,
        fecha: b.fecha,
        reactivos: b.reactivos,
        bancos: null,
        estatus: b.estatus,
        icono: "fa-regular fa-file-lines fa-xl text-primary"
      }));

      const carpetasMap = state.carpetas.map((c) => ({
        id: c.id,
        tipo: "carpeta",
        titulo: c.nombre,
        descripcion: c.descripcion,
        fecha: c.fecha,
        reactivos: null,
        estatus: null,
        bancos: c.bancos,
        icono: "fa-regular fa-folder fa-xl text-warning"
      }));

      return [...bancosMap, ...carpetasMap];
    }
  },

  actions: {
    agregarBanco(banco: Banco) {
      this.bancos.push(banco);
    },

    agregarCarpeta(carpeta: Carpeta) {
      this.carpetas.push(carpeta);
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
