<script setup lang="ts">
const router = useRouter();
const irDetalle = (item: any) => {
  if (item.tipo === "banco") {
    router.push({
      name: "banco-detalle",
      params: { id: item.id }
    });
  } else {
    router.push({
      name: "carpeta-detalle",
      params: { id: item.id }
    });
  }
};

import { computed } from "vue";
import { useRouter } from "vue-router";

const bancos = [
  {
    id: 1,
    nombre: "Banco de Matemáticas",
    descripcion: "Banco con ejercicios de álgebra, cálculo y geometría.",
    reactivos: 10,
    fecha: "19-03-2025",
    estatus: "Pendiente"
  },
  {
    id: 2,
    nombre: "Física Básica",
    descripcion: "Problemas introductorios.",
    reactivos: 25,
    fecha: "05-01-2025",
    estatus: "Terminado"
  },
  {
    id: 3,
    nombre: "Química Orgánica",
    descripcion:
      "Colección extensa de reactivos sobre compuestos orgánicos, incluyendo nomenclatura, reacciones y mecanismos avanzados que requieren análisis detallado.",
    reactivos: 540,
    fecha: "12-02-2025",
    estatus: "Revision"
  },
  {
    id: 4,
    nombre: "Historia de México",
    descripcion: "Banco general.",
    reactivos: 125,
    fecha: "28-11-2024",
    estatus: "Rechazado"
  },
  {
    id: 5,
    nombre: "Biología Molecular",
    descripcion:
      "Incluye temas de ADN, ARN, proteínas, replicación, transcripción y traducción con preguntas diseñadas para evaluar comprensión profunda.",
    reactivos: 60,
    fecha: "03-03-2025",
    estatus: "Pendiente"
  },
  {
    id: 6,
    nombre: "Geografía",
    descripcion: "Mapas y conceptos básicos.",
    reactivos: 300,
    fecha: "17-12-2024",
    estatus: "Terminado"
  },
  {
    id: 7,
    nombre: "Programación en Java",
    descripcion:
      "Ejercicios prácticos de POO, estructuras de datos, manejo de excepciones y desarrollo de aplicaciones básicas.",
    reactivos: 1035,
    fecha: "09-03-2025",
    estatus: "Revision"
  },
  {
    id: 8,
    nombre: "Inglés Básico",
    descripcion: "Gramática simple.",
    reactivos: 12,
    fecha: "21-10-2024",
    estatus: "Pendiente"
  },
  {
    id: 9,
    nombre: "Estadística",
    descripcion:
      "Problemas de probabilidad, distribuciones, inferencia estadística y análisis de datos aplicados a casos reales.",
    reactivos: 50,
    fecha: "14-01-2025",
    estatus: "Terminado"
  },
  {
    id: 10,
    nombre: "Filosofía",
    descripcion: "Conceptos clave.",
    reactivos: 5,
    fecha: "30-09-2024",
    estatus: "Rechazado"
  }
];

const carpetas = [
  {
    id: 1,
    nombre: "Carpeta Ciencias",
    descripcion: "Contiene bancos y materiales de ciencias.",
    fecha: "2026-03-18",
    bancos: 12
  }
];

const lista = computed(() => {
  const bancosMap = bancos.map((b) => ({
    id: b.id,
    tipo: "banco",
    titulo: b.nombre,
    descripcion: b.descripcion,
    fecha: b.fecha,
    reactivos: b.reactivos,
    bancos: null,
    estatus: b.estatus,
    icono: "fa-regular fa-file-lines fa-xl  text-primary"
  }));

  const carpetasMap = carpetas.map((c) => ({
    id: c.id,
    tipo: "carpeta",
    titulo: c.nombre,
    descripcion: c.descripcion,
    fecha: c.fecha,
    reactivos: null,
    estatus: null,
    bancos: c.bancos,
    icono: "fa-regular fa-folder fa-xl text-warning"
  }));
  return [...bancosMap, ...carpetasMap];
});
</script>
<template>
  <!-- <div class="max-w-350 mx-auto px-6 py-6">
    <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"> -->
  <table class="table table-sm w-full">
    <thead class="bg-base-200">
      <tr>
        <th class="w-8 text-center">Tipo</th>
        <th>
          Titulo
          <label class="swap swap-rotate">
            <input type="checkbox" />
            <i class="swap-on fa-regular fa-arrow-down"></i>
            <i class="swap-off fa-regular fa-arrow-up"></i>
          </label>
        </th>
        <th>Estatus</th>
        <th>Contenidos</th>
        <th>Ultima Modificacion</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in lista"
        :key="item.id"
        class="cursor-pointer hover:bg-base-200 transition"
        @click="irDetalle(item)"
      >
        <td class="text-center">
          <i :class="[item.icono]"></i>
        </td>
        <td>
          <p class="text-sm font-semibold">
            {{ item.titulo }}
          </p>
          <span class="text-xs text-(--color-texto-secundario)">{{ item.descripcion }}</span>
        </td>
        <td>
          <div v-if="item.estatus != null">
            <span
              class="badge badge-sm badge-soft"
              :class="{
                'badge-ghost': item.estatus === 'Pendiente',
                'badge-success badge-outline ': item.estatus === 'Terminado',
                'badge-warning badge-outline ': item.estatus === 'Revision',
                'badge-error badge-outline ': item.estatus === 'Rechazado'
              }"
            >
              {{ item.estatus }}
            </span>
          </div>
        </td>
        <td class="text-center w-">
          <div v-if="item.tipo === 'banco'" class="text-xs">{{ item.reactivos }} <span> Reactivos</span></div>
          <div v-if="item.tipo === 'carpeta'" class="text-s">{{ item.bancos }} Bancos</div>
        </td>
        <td class="text-center">
          <span class="text-s">
            {{ item.fecha }}
          </span>
        </td>
        <td>
          <div class="flex gap-3">
            <button class="btn btn-soft btn-info">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>

            <button class="btn btn-soft btn-error">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
