<script setup lang="ts">
import { useModalStore } from "../common/components/stores/modalStore";
import TablaBancosyCarpetas from "../common/components/tablaBancosyCarpetas.vue";
import CrearBanco from "../modals/crearBanco.vue";
import CrearCarpeta from "../modals/crearCarpeta.vue";
const modal = useModalStore();

function abrirCrearBanco() {
  modal.openModal(CrearBanco, {}, [
    {
      label: "Cancelar",
      variant: "outline",
      action: modal.closeModal
    },
    {
      label: "Crear ",
      variant: "primary",
      type: "submit",
      action: () => {
        // Aquí iría la lógica para crear el banco, como enviar datos al backend, etc.
        console.log("Banco creado");
        modal.closeModal();
      }
    }
  ]);
}

function abrirCrearCarpeta() {
  modal.openModal(CrearCarpeta, { modo: "crear" }, [
    {
      label: "Cancelar",
      variant: "outline",
      action: modal.closeModal
    },
    {
      label: "Crear ",
      variant: "primary",
      type: "submit",
      action: () => {
        // Aquí iría la lógica para crear la carpeta, como enviar datos al backend, etc.
        // console.log("Carpeta creada");
        // modal.closeModal();
      }
    }
  ]);
}
</script>

<template>
  <div class="p-8">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold">Mis Bancos</h1>
        <div class="text-(--color-texto) text-sm">Gestiona y organiza tus bancos de preguntas y reactivos</div>
      </div>
      <!-- <button class="btn btn-lg btn-soft btn-primary rounded-box">Crear</button> -->
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn btn-xl btn-soft btn-primary rounded-box">Crear</div>
        <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li class="pb-2">
            <button class="btn btn-soft btn-info" @click="abrirCrearBanco">Banco de Reactivos</button>
          </li>
          <li>
            <button class="btn btn-soft btn-warning" @click="abrirCrearCarpeta">Carpeta</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="tabs tabs-lift">
      <label class="tab">
        <input type="radio" name="my_tabs_4" :checked="true" />
        <i class="fa-duotone fa-regular fa-list"></i>
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <div class="max-w-350 mx-auto px-6 py-6">
          <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <TablaBancosyCarpetas />
          </div>
        </div>
      </div>

      <!-- <label class="tab">
        <input type="radio" name="my_tabs_4" />
        <i class="fa-solid fa-grid"></i>
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">contenido</div> -->
    </div>
  </div>
</template>
