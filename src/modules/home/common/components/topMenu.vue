<script setup lang="ts">
//
const emit = defineEmits(["toggle"]);

import { useRoute } from "vue-router";
import { useModalStore } from "./stores/modalStore";
import CerrarSesion from "./CerrarSesion.vue";
import BaseModal from "./BaseModal.vue";
import ActualizarContrasena from "./ActualizarContrasena.vue";
const route = useRoute();

const modal = useModalStore();
function openActualizarContraseñaModal() {
  modal.openModal(ActualizarContrasena, {}, [
    {
      label: "Cancelar",
      variant: "outline"
    },
    {
      label: "Actualizar Contraseña",
      variant: "primary",
      action: () => {
        // Aquí iría la lógica para actualizar la contraseña, como enviar datos al backend, etc.
        console.log("Contraseña actualizada");
        modal.closeModal();
      }
    }
  ]);
}

function openCerrarSesionModal() {
  modal.openModal(CerrarSesion, {}, [
    {
      label: "Cancelar",
      variant: "outline"
    },
    {
      label: "Cerrar Sesion",
      variant: "error",
      action: () => {
        // Aquí iría la lógica para cerrar sesión, como limpiar tokens, redirigir, etc.
        console.log("Sesión cerrada");
        modal.closeModal();
      }
    }
  ]);
}
</script>

<template>
  <div class="navbar bg-base-100 border-b border-primary/10">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <router-link
            :to="{ name: 'mis-bancos' }"
            class="tab tab-sm"
            :class="{ 'tab-active': route.matched.some((r) => r.path.includes('misBancos')) }"
          >
            Mis Bancos
          </router-link>
          <router-link
            :to="{ name: 'contribuidores' }"
            class="tab tab-sm"
            :class="{ 'tab-active': route.name === 'contribuidores' }"
            >Contribuidores
          </router-link>
        </ul>
      </div>
      <span class="ps-4 text-xl font-semibold">Banco Reactivos</span>
    </div>

    <div class="navbar-center hidden lg:flex">
      <div role="tablist" class="tabs tabs-border">
        <router-link
          :to="{ name: 'mis-bancos' }"
          class="tab tab-sm"
          :class="{ 'tab-active': route.matched.some((r) => r.path.includes('misBancos')) }"
        >
          Mis Bancos
        </router-link>

        <router-link
          :to="{ name: 'contribuidores' }"
          class="tab tab-sm"
          :class="{ 'tab-active': route.name === 'contribuidores' }"
        >
          Contribuidores
        </router-link>
      </div>
    </div>
    <div class="navbar-end">
      <div class="flex-none">
        <label class="toggle text-base-content">
          <input type="checkbox" value="dark" class="theme-controller" />

          <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-8 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a class="justify-between"> Perfil </a>
            </li>
            <li><a>Configuracion</a></li>
            <li><button class="btn-ghost" @click="openActualizarContraseñaModal">Actualizar Contraseña</button></li>
            <li><button class="btn btn-sm btn-soft btn-error" @click="openCerrarSesionModal">Cerrar Sesion</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <base-modal />
</template>
