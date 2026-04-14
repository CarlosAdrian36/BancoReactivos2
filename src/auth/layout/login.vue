<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const transitionName = computed(() => {
  const order = (route.meta.order as number) || 0;

  if (order === 2) return "slide-left";
  return "slide-right";
});
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
