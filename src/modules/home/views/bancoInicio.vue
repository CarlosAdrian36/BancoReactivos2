<template>Aqui va el inicio ID {{ id }}</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;
console.log(id);
</script>
