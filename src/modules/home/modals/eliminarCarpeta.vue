<script setup lang="ts">
import { useModalStore } from "../common/components/stores/modalStore";
import { useItemsStore } from "../common/components/stores/useitemsStore";

const props = defineProps<{
  carpeta?: {
    tipo: "carpeta";
    id: number;
    nombre: string;
    fecha: string;
    bancos: number;
  };
}>();

const modal = useModalStore();
const store = useItemsStore();

modal.setSubmitFN(() => {
  if (props.carpeta) {
    console.log("Eliminando carpeta con id:", props.carpeta.id);
    store.eliminarItem(props.carpeta.id, props.carpeta.tipo);
    modal.closeModal();
  }
});
</script>
<template>
  <div>
    <h3 class="font-bold text-lg">Eliminar Carpeta</h3>
    <p class="py-4">¿Estás seguro de que deseas eliminar esta carpeta?</p>
  </div>
  <span class="font-bold text-lg">
    {{ props.carpeta?.nombre }}
  </span>
</template>
