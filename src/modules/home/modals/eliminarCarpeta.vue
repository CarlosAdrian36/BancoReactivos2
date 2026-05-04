<template>aqui se realiza la eliminacion del banco</template>
<script setup lang="ts">
const props = defineProps<{
  modo?: "editar" | "crear";
  carpeta?: {
    id: number;
    nombre: string;
    fecha: string;
    bancos: number;
  };
}>();
</script>
