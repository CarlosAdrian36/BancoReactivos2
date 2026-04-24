<script setup lang="ts"></script>

<template>
  <h3 class="text-lg font-bold">Nuevo Banco</h3>

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
          Nombre del Banco
        </span>
      </label>
    </div>
  </div>

  <div class="py-4">
    <div class="w-full">
      <label class="relative block">
        <textarea
          rows="4"
          placeholder=" "
          class="peer w-full px-3 pt-7 pb-2 text-[15px] leading-5 bg-transparent border border-neutral-700 rounded-md resize-none transition focus:border-primary focus:ring-1 focus:ring-primary/40 focus:outline-none"
        ></textarea>

        <span
          class="absolute left-3 top-2 text-neutral-600 bg-base-100 px-1 leading-none transition-all pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs"
        >
          Descripción del Banco
        </span>
      </label>
    </div>
  </div>
  <div class="divider"></div>

  <!-- <h3 class="text-lg font-bold">Traduccion</h3>
  <div class="flex flex-row py-4">
    <div class="basis-1/3">
      <p class="flex justify-center">Ingles</p>
    </div>
    <div class="basis-2/3">
      <div class="flex justify-center">
        <input type="checkbox" class="toggle checked:text-success" />
      </div>
    </div>
  </div>
  <div class="flex flex-row py-4">
    <div class="basis-1/3">
      <p class="flex justify-center">Frances</p>
    </div>
    <div class="basis-2/3">
      <div class="flex justify-center">
        <input type="checkbox" class="toggle checked:text-success" />
      </div>
    </div>
  </div> -->
</template>
