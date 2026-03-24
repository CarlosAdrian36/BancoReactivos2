<script setup lang="ts">
// import { RouterView } from "vue-router";
import TopMenu from "../common/components/topMenu.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <TopMenu />

    <main class="flex-1 bg-base-300">
      <RouterView />
    </main>
  </div>
</template>
