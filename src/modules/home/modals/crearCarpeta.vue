<script setup lang="ts"></script>

<template>
  <h3 class="text-lg font-bold">Nueva carpeta</h3>

  <div class="py-4">
    <div class="w-full">
      <label class="relative block">
        <input
          type="text"
          placeholder=" "
          class="peer w-full h-12 px-3 leading-5 bg-base-100 border border-neutral-400 rounded-md shadow-sm transition focus:shadow-none focus:border-primary focus:ring-1 focus:ring-primary/40 focus:outline-none"
        />

        <span
          class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 bg-base-100 px-1 leading-none transition-all pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
        >
          Nombre de la carpeta
        </span>
      </label>
    </div>
  </div>
</template>
