<script setup lang="ts">
import TablaBancosyCarpetas from "../common/components/tablaBancosyCarpetas.vue";
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold">Mis Bancos</h1>
    <div class="text-(--color-texto) text-sm">Gestiona y organiza tus bancos de preguntas y reactivos</div>

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

      <label class="tab">
        <input type="radio" name="my_tabs_4" />
        <i class="fa-solid fa-grid"></i>
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">contenido</div>
    </div>
  </div>
</template>
