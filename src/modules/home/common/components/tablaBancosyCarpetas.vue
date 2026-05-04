<script setup lang="ts">
import { useRouter } from "vue-router";
import CrearCarpeta from "@/modules/home/modals/crearCarpeta.vue";
import eliminarCarpeta from "@/modules/home/modals/eliminarCarpeta.vue";
const modal = useModalStore();

const router = useRouter();
const irDetalle = (item: ItemLista) => {
  if (item.tipo === "banco") {
    router.push({
      name: "banco-detalle",

      params: { id: item.id }
    });
  } else {
    router.push({
      name: "carpeta-detalle",
      params: { id: item.id }
    });
  }
};
function editarCarpeta(item: ItemLista) {
  modal.openModal(CrearCarpeta, { modo: "editar", carpeta: item }, [
    {
      label: "Cancelar",
      variant: "outline",
      action: modal.closeModal
    },
    {
      label: "Guardar ",
      variant: "primary",
      type: "submit",
      action: () => {
        // Aquí iría la lógica para editar la carpeta, como enviar datos al backend, etc.
        console.log("Carpeta editada con el boton");
        modal.closeModal();
      }
    }
  ]);
}

function quitarCarpeta(item: ItemLista) {
  // Aquí iría la lógica para eliminar la carpeta, como mostrar una confirmación, enviar datos al backend, etc.
  modal.openModal(eliminarCarpeta, { carpeta: item }, [
    {
      label: "Cancelar",
      variant: "outline",
      action: modal.closeModal
    },
    {
      label: "Eliminar ",
      variant: "error",
      type: "submit",
      action: () => {
        // Aquí iría la lógica para eliminar la carpeta, como enviar datos al backend, etc.
        // console.log("Carpeta eliminada");
        // modal.closeModal();
      }
    }
  ]);
  // console.log("Carpeta eliminada");
}

// SUSTITUIR POR TANSTACKQUERY

import { useItemsStore } from "./stores/useitemsStore";
import { storeToRefs } from "pinia";
import { useModalStore } from "./stores/modalStore";
import type { ItemLista } from "./interface/itemListaInterface";

const store = useItemsStore();

const { lista } = storeToRefs(store);

//
</script>
<template>
  <table class="table table-sm w-full">
    <thead class="bg-base-200">
      <tr>
        <th class="w-8 text-center">Tipo</th>
        <th>
          Nombre
          <label class="swap swap-rotate">
            <input type="checkbox" />
            <i class="swap-on fa-regular fa-arrow-down"></i>
            <i class="swap-off fa-regular fa-arrow-up"></i>
          </label>
        </th>
        <th>Estatus</th>
        <th>Contenidos</th>
        <th>Ultima Modificacion</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="lista.length"
        v-for="item in lista"
        :key="item.id"
        class="cursor-pointer hover:bg-base-200 transition"
        @click="irDetalle(item)"
      >
        <td class="text-center">
          <i :class="[item.icono]"></i>
        </td>
        <td>
          <p class="text-sm font-semibold">
            {{ item.nombre }}
          </p>
          <span v-if="item.descripcion" class="text-xs text-(--color-texto-secundario)">{{ item.descripcion }}</span>
        </td>
        <td>
          <div v-if="item.estatus != null">
            <span
              class="badge badge-sm badge-soft"
              :class="{
                'badge-ghost': item.estatus === 'Pendiente',
                'badge-success badge-outline ': item.estatus === 'Terminado',
                'badge-warning badge-outline ': item.estatus === 'Revision',
                'badge-error badge-outline ': item.estatus === 'Rechazado'
              }"
            >
              {{ item.estatus }}
            </span>
          </div>
        </td>
        <td class="text-center w-">
          <div v-if="item.tipo === 'banco'" class="text-xs">{{ item.reactivos }} <span> Reactivos</span></div>
          <div v-if="item.tipo === 'carpeta'" class="text-s">{{ item.bancos }} Bancos</div>
        </td>
        <td class="text-center">
          <span class="text-s">
            {{ item.fecha }}
          </span>
        </td>
        <td>
          <div class="flex gap-3">
            <button class="btn btn-soft btn-info" @click.stop="editarCarpeta(item)">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>

            <button class="btn btn-soft btn-error" @click.stop="quitarCarpeta(item)">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
      <tr v-else>
        <td colspan="6">
          <div class="flex flex-col items-center justify-center py-10 text-center">
            <i class="fa-regular fa-folder-open text-4xl text-base-content/40 mb-3"></i>

            <p class="font-semibold text-base-content/70">No hay elementos aún</p>

            <p class="text-sm text-base-content/50">Puedes crear una carpeta o banco para comenzar</p>

            <button class="btn btn-primary btn-sm mt-4" @click="">
              <i class="fa-regular fa-plus"></i>
              Crear elemento
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
