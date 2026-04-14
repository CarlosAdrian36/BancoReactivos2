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

<!-- <template>
  <div
    class="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
    style="background-image: url(&quot;/src/assets/image/wall.jpg&quot;)"
  ></div>
  <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template> -->
<template>
  <div
    class="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
    style="background-image: url(&quot;/src/assets/image/biblioteca.jpg&quot;)"
  >
    <!-- Card del login -->
    <div class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
